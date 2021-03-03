import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceDetailComponent } from './components/price-detail/price-detail.component';
import { PricesComponent } from './components/prices/prices.component';

const routes: Routes = [
  { path: '', component: PricesComponent },
  { path: ':priceKey', component: PriceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricesRoutingModule {}
