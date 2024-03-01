import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path : 'home' , title: 'Home', component: HomeComponent},
    {path : 'about' , title: 'About', component: AboutComponent},
    {path : 'orders' , title: 'Orders', component: OrdersComponent},
    {path : 'contact-us' , title: 'ContactUs', component: ContactUsComponent},
    {path : 'sign-in' , title: 'SignIn', component: SignInComponent},
    {path : 'login' , title: 'LogIn', component: LoginComponent},
    {path : 'payment' , title: 'payment', component: PaymentComponent},

];
