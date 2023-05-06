import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddSearch } from 'src/app/store/actions/actions';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IState } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export default class BookingPageComponent implements OnInit {

  public isAvailableTicketsOrPassengers = true;

  constructor(private router: Router, private store: Store<IState>) {

  }

  ngOnInit(): void {
    // const mockSearchData: IOptionsSearch = {
    //   type: 'Round',//One or Round
    //   origin: 'Minsk MSQ',//on
    //   destination: 'New York NYC',//from
    //   passengers: [
    //     {name: 'Adults', desc: '14+ years', value: 1},
    //     {name: 'Child', desc: '2-14 years', value: 2},
    //     {name: 'Infant', desc: '0-2 years', value: 3},
    //   ],
    //   startDate: '10.06.2023',
    //   returnDate: '11.06.2023',
    // }

    // this.store.dispatch(new AddSearch(mockSearchData));

    console.log();

  }

  public goBack(): void {
    if (this.isAvailableTicketsOrPassengers) {
      this.router.navigate(['']);
    }

    this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }

  public continue(): void {
    if (!this.isAvailableTicketsOrPassengers) {
      //this.router.navigate(['']);//! переход к старанице билетов
    }

    this.isAvailableTicketsOrPassengers = !this.isAvailableTicketsOrPassengers;
  }
}
