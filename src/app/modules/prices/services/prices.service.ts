import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Price } from '@prices/models/price';
import { PriceDetails } from '@prices/models/price-details';
import { environment } from '@src/environments/environment';

@Injectable()
export class PricesService {
  constructor(private http: HttpClient) {}

  getPrices() {
    return this.http.get<Price[]>(`${environment.api}/last`).pipe(
      map((prices) => {
        return Object.entries(prices).map((price) => {
          const priceData = price[1];
          return Object.assign(priceData, {
            date: Number(priceData.date) * 1000,
          });
        });
      })
    );
  }

  getPriceDetails(priceKey: string) {
    return this.http
      .get<PriceDetails>(`${environment.api}/values/${priceKey}`)
      .pipe(
        map((priceDetails) => {
          const values = Object.entries(priceDetails.values).map((value) => {
            return { date: Number(value[0]) * 1000, value: value[1] };
          });

          return Object.assign(priceDetails, { values });
        })
      );
  }
}
