import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export default class OneWayComponent {
  public ticketInfo = {
    from: 'Dooblin',
    to: "Warsaw Modlin",
    dateFrom: '1Mar',
    dateTo: '18Mar',
    person: '3',
  }
}
