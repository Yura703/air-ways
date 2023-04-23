import { Component } from '@angular/core';

@Component({
  selector: 'app-second-menu',
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.scss']
})
export default class SecondMenuComponent {

  public isAvailableEdit = false;

  public ticketInfo = {
    from: 'Dooblin',
    fromABR: 'DUB',
    to: "Warsaw Modlin",
    toABR: "WAW",
    dateFrom: '1Mar',
    dateTo: '18Mar',
    person: {
      adult: '2',
      child: '3',
      infant: '4',
      summ: '9'
    },
  }

  public changeAvailableEdit(): void {
    this.isAvailableEdit = !this.isAvailableEdit;
  }
}
