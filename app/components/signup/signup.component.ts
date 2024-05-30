import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private service: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  userDetail: any = {
    username: '',
    email: '',
    password: '',
    role: 'user',
    cart: [],
  };
  loginDetail: any = {
    userName: '',
    password: '',
  };

  ngOnInit(): void {}
  registerUser() {
    this.service.registerUser(this.userDetail).subscribe(
      (data) => {
        this.toastr.success('User Created', 'Success', {
          positionClass: 'toast-bottom-center',
          closeButton: true,
        });
      },
      (error) => {
        this.toastr.error(error.error, 'Error', {
          positionClass: 'toast-bottom-center',
          closeButton: true,
        });
      }
    );
  }
  loginUser() {
    this.service.loginUser(this.loginDetail).subscribe(
      (data) => {
        if (data.user.role === 'Admin') {
          localStorage.setItem('userId', data.user.id);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userName', data.user.username);
          localStorage.setItem('userRole', data.user.role);
          this.toastr.success('Admin logged In', 'Success', {
            positionClass: 'toast-bottom-center',
            closeButton: true,
          });
          this.router.navigate(['/adminpage']);
        } else {
          localStorage.setItem('userId', data.user.id);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userName', data.user.username);
          localStorage.setItem('userRole', data.user.role);
          this.toastr.success('User logged In', 'Success', {
            positionClass: 'toast-bottom-center',
            closeButton: true,
          });
          this.router.navigate(['/terms']);
        }
      },
      (error) => {
        this.toastr.error(error.error, 'Error', {
          positionClass: 'toast-bottom-center',
          closeButton: true,
        });
      }
    );
  }
}
