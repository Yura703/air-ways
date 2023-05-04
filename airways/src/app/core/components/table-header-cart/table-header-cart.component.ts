import { Component } from '@angular/core';

@Component({
  selector: 'app-table-header-cart',
  templateUrl: './table-header-cart.component.html',
  styleUrls: ['./table-header-cart.component.scss']
})
export class TableHeaderCartComponent {
  titleCartTable = ['№', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price'];

}
