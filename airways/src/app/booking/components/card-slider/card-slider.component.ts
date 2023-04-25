import { Component } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {
  public ticketInfo = {
    from: 'Dooblin',
    to: "Warsaw Modlin",
    dateFrom: '1Mar',
    dateTo: '18Mar',
    person: '3',
  }

  public currentDate = new Date();
  public currency = "€";
  public cost = 146.7777777;
}
