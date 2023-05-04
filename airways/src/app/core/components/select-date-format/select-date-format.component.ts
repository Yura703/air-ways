import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select-date-format',
  templateUrl: './select-date-format.component.html',
  styleUrls: ['./select-date-format.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectDateFormatComponent {
  arrSelectFormatDate = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YYYY/DD/MM',
    'YYYY/MM/DD',
  ];
  selectFormatDate = this.arrSelectFormatDate[0];
}
