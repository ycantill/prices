import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prices',
    loadChildren: () =>
      import('./modules/prices/prices.module').then((m) => m.PricesModule),
  },
  { path: '', redirectTo: 'prices', pathMatch: 'full' },
  { path: '**', redirectTo: 'prices', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
