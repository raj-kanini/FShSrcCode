import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  @ViewChild('billForm') billForm!: NgForm;
  fullName: any;
  email: any;
  address: any;
  city: any;
  state: any;
  pinCode: any;
  constructor(private service: ProductService) {}
  userId: string | null = '';
  user: any = [];
  totalPrice = 0;
  cartLength = 0;

  ngOnInit(): void {
    this.test();
  }

  test() {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.service.getUserById(parseInt(this.userId)).subscribe((data) => {
        this.user = data;
        this.cartLength = data[0].cart.length;
        this.totalPrice = data[0].cart.reduce(
          (total: number, product: any) => total + product.price,
          0
        );
      });
    }
  }
  makePdf() {
    let pdf = new jsPDF();

    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('BillDetail.pdf');
      },
    });

    // Reset form fields
    this.fullName = '';
    this.email = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.pinCode = '';
  }

  deleteItemFromCart(productId: any) {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const data = {
        userid: userId,
        poductid: productId,
      };
      this.service
        .deleteProductFromCart(parseInt(data.userid), data.poductid)
        .subscribe((data) => {
        });
      this.test();
    }
  }
}
