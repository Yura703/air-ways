import { Component, Input } from '@angular/core';
import { IFlightInfo } from 'src/app/store/models/flightInfo';


@Component({
  selector: 'app-item-cart-flight',
  templateUrl: './item-cart-flight.component.html',
  styleUrls: ['./item-cart-flight.component.scss']
})
export class ItemCartFlightComponent {
  @Input() item: IFlightInfo;
 
}
