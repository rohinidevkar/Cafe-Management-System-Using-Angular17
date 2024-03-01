import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { HomeComponent } from '../home/home.component';
// import { LoginComponent } from '../login/login.component';
// import { SignInComponent } from '../sign-in/sign-in.component';
// import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
