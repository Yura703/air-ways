import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface IFlightInfo {
  item: string;
  flight: string;
  typeTrip: string;
  data: string;
  passengers: string;
  price: string;
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

  clickEditItem(event: Event) {
    event.stopPropagation();
    console.log(this.item)
  }
}
