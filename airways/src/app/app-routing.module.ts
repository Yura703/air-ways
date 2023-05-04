import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './core/pages/basket-page/basket-page.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { UserPageComponent } from './core/pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'flight-booking',
    loadChildren: () =>
      import('./flight-booking/flight-booking.module').then(
        (m) => m.FlightBookingModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'basket',
    component: BasketPageComponent,
  },
  {
    path: 'user',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
