import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;
  public isUser: boolean = false;
  public isLoggedUser: boolean = false;

  userRole: string | null = '';
  userName: string | null = '';

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    const userName = localStorage.getItem('userName');
    if (userRole) {
      this.userRole = userRole;
      this.userName = userName;
      if (userRole === 'Admin') {
        this.isAdmin = true;
      } else {
        this.isUser = true;
      }
    }

    const token = localStorage.getItem('token');
    if (token) {
      if (this.isAdmin) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedUser = true;
      }
    }

    $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['signup']);
  }
}
