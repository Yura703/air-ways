import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFormatMoney } from 'src/app/store/selectors/selectors';

export interface IFlightInfo {
  item: string;
  flight: string;
  typeTrip: string;
  data: string;
  passengers: string;
  price: number;
  completed: boolean;
  color: ThemePalette;
}

@Component({
  selector: 'app-item-cart-flight',
  templateUrl: './item-cart-flight.component.html',
  styleUrls: ['./item-cart-flight.component.scss']
})
export class ItemCartFlightComponent {
  @Input() item: IFlightInfo;
  moneyFormat$ = this.store.select(selectFormatMoney);

  constructor(private store: Store<IAppStore>){}
 
}
