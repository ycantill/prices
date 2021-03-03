import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './components/prices/prices.component';
import { PriceComponent } from './components/price/price.component';
import { HttpClientModule } from '@angular/common/http';
import { PricesService } from './services/prices.service';
import { PriceDetailComponent } from './components/price-detail/price-detail.component';

@NgModule({
  declarations: [PricesComponent, PriceComponent, PriceDetailComponent],
  imports: [CommonModule, PricesRoutingModule, HttpClientModule],
  providers: [PricesService],
})
export class PricesModule {}
