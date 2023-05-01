import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export default class OneWayComponent {

  @Input() direction: boolean;

  public ticketInfo = {
    from: 'Dooblin',
    to: "Warsaw Modlin",
    dateFrom: '1Mar',
    dateTo: '18Mar',
    person: '3',
    dateFlightFrom: new Date(),
    dateFlightTo: new Date(),
    utc: 'UTC +0',
    type: 'Direct',
    tymeFly: '2h 50m',
    flightNo: 'FR 1925',
    countSeatsAvailable: '100',
    currency: "€",
    cost: 146.7777777,
  }

  public isAvailablePrice = true;

  public changeAvailablePrice(): void {
    this.isAvailablePrice = !this.isAvailablePrice;
  }
}
