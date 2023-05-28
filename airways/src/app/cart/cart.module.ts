import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule, CoreModule],
})
export class CartModule {}
