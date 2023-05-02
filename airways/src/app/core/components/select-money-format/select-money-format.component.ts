import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select-money-format',
  templateUrl: './select-money-format.component.html',
  styleUrls: ['./select-money-format.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectMoneyFormatComponent {
  arrSelectFormatDate = ['EUR', 'USA', 'RUB', 'PLN'];
  selectFormatDate = this.arrSelectFormatDate[0];
}


