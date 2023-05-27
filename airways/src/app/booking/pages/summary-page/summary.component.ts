import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISelectedTickets } from 'src/app/store/models/selectedTickets';
import { IAppStore } from 'src/app/store/models/stateModel';
import { ICostTickets, ITicketsData } from 'src/app/store/models/ticketsData';
import { selectTicketsData, selectSelectedTickets } from 'src/app/store/selectors/selectors';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryPageComponent implements OnInit {

  public selectedTickets$: Observable<ISelectedTickets>;
  public ticketData$: Observable<ITicketsData>;

  public costTickets: ICostTickets = {
    adult: 0,
    child: 0,
    infant:0,
    adultTax: 0,
    childTax: 0,
    infantTax:0,
    adultFare: 0,
    childFare: 0,
    infantFare: 0,
    total: 0,
  };

  constructor(public store: Store<IAppStore>, private router: Router, public bookingService: BookingService) {}

  ngOnInit(): void {
     this.selectedTickets$ = this.store.pipe(select(selectSelectedTickets));
     this.ticketData$ = this.store.pipe(select(selectTicketsData));

     this.selectedTickets$.subscribe(data => {
      this.costTickets.adultFare = data?.from?.price ? data.from.price : 0;
     });

     this.ticketData$.subscribe(data => {
      this.costTickets.adult = data.adult ? data.adult.length : 0;
      this.costTickets.child = data.child ? data.child.length : 0;
      this.costTickets.infant = data.infant ? data.infant.length : 0;
    });

    this.costTickets = this.bookingService.getCostTickets(this.costTickets);
  console.log(this.costTickets);

  }

  public goBack() {
    this.router.navigate(['flight-booking/passengers']);
  }

  public goOrderCard() {}

  public goBuyNow() {}
}
