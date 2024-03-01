import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

pay: any = {
  order: '',
  cardNo: '',
  name: '',
  email: '',
};

  menuItems: string[] = ['Espresso', 'Iced Coffee', 'Chicken Burger', 'Four Layer Chocolate Dessert', 'Club Sandwich', 'Chocolate sandwich', 'Blueberry Waffles', 'Veg crispy Burger'];
  selectedMenuItem: string = ''
  totalAmount: number = 0; 
Items: any;


pays() {
  const pricePerItem = 150;
  const numberOfItems = parseInt(this.pay.order);
  this.totalAmount = pricePerItem * numberOfItems;
  this.pay = {};
}
}
