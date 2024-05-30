import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { TermspageComponent } from './components/termspage/termspage.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { BillingComponent } from './components/billing/billing.component';
import { authGuard } from './components/authGuard/auth.guard';
import { adminAuthGuard } from './components/authGuard/admin-auth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: 'terms', component: TermspageComponent, canActivate: [authGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'viewproduct/:id', component: ViewProductComponent, canActivate: [authGuard] },
  { path: 'adminpage', component: AdminpageComponent, canActivate: [adminAuthGuard] },
  { path: 'billing', component: BillingComponent, canActivate: [authGuard] },
  { path: 'blog', component: BlogComponent },
  { path: 'careers', component: CareersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
