import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '@prices/models/price';
import { PricesService } from '@prices/services/prices.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  prices$: Observable<Price[]>;

  constructor(private pricesService: PricesService) {
    this.prices$ = this.pricesService.getPrices();
  }
}
