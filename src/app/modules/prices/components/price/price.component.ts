import { Component, Input } from '@angular/core';
import { Price } from '@prices/models/price';

@Component({
  selector: 'tr[app-price]',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
  @Input() price: Price;
  constructor() {
    this.price = Object.create(null);
  }
}
