import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-ticket-section',
  templateUrl: './ticket-section.component.html',
  styleUrls: ['./ticket-section.component.scss']
})
export default class TicketSectionComponent implements OnInit {
  public typeFlyRoundOrOneWay$: BehaviorSubject<boolean>;

  constructor( private bookingService: BookingService ) {}

  ngOnInit(): void {
    this.typeFlyRoundOrOneWay$ = this.bookingService.typeFlyRoundOrOneWay$;
  }
}
