import { Component, Input } from '@angular/core';
import { IFlightInfo } from 'src/app/store/models/flightInfo';


@Component({
  selector: 'app-basket-item-edit',
  templateUrl: './basket-item-edit.component.html',
  styleUrls: ['./basket-item-edit.component.scss']
})
export class BasketItemEditComponent {
  @Input() item: IFlightInfo;
  isOpen: boolean;

  clickEditItem() {
    this.isOpen ? this.isOpen = false : this.isOpen = true;
  }

  clickDelete() {
    this.isOpen = false;
  }

  clickEdit() {
    this.isOpen = false;
  }

}
