import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, RouterLink, HomeComponent, ContactUsComponent, AboutComponent, OrdersComponent, SignInComponent, NavbarComponent, CommonModule]
})
export class AppComponent {
  title = 'Cafeteria';
}
