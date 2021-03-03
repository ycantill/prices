import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PriceDetails } from '@prices/models/price-details';
import { PricesService } from '@prices/services/prices.service';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.scss'],
})
export class PriceDetailComponent {
  priceDetails$: Observable<PriceDetails>;
  constructor(
    private route: ActivatedRoute,
    private pricesService: PricesService
  ) {
    this.priceDetails$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.pricesService.getPriceDetails(
          String(params.get('priceKey'))
        );
      })
    );
  }
}
