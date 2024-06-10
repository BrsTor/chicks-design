import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownItem } from '../../interfaces/dropdown/dropdownItem';
import  headerDropdowns from '../dropdown/headerDropdowns.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dropdownsList: DropdownItem[]
  currencies: DropdownItem
  shoppingList: DropdownItem
  cartIcon: string
  subMenuIcon: string

  constructor() {
    this.dropdownsList = headerDropdowns;

    this.currencies = {
      name: 'USD',
      items: [
        { name: 'EUR', href: '#'},
        { name: 'COP', href: '#'},
        { name: 'ARS', href: '#'}
      ]
    }

    this.shoppingList = {
      name: 'CART (5)',
      items: [
        { name: 'View Cart', href: '#'},
        { name: 'Checkout', href: '#'}
      ]
    }

    this.cartIcon = 'assets/svg/cart-icon.svg'
    this.subMenuIcon = 'assets/svg/submenu-icon.svg'
  }
}
