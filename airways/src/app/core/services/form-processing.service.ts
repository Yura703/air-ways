import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
// import { from } from 'rxjs';
import { AddSearch } from 'src/app/store/actions/actions';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IPassengers, ISearchMain } from 'src/app/store/models/searchMainModel';
import { IAppStore } from 'src/app/store/models/stateModel';

@Injectable({
  providedIn: 'root',
})
export class FormProcessingService {
  constructor(private store: Store<IAppStore>) {}

  public isData = new BehaviorSubject<boolean>(false);

  processingForm(
    form: Omit<ISearchMain, 'passengers'> & {
      passengers: { value: IPassengers[] };
    },
    reverse: boolean
  ) {
    const optionSearch: IOptionsSearch = {
      type: form.type,
      origin: this.changeLocation(form.origin.location),
      destination: this.changeLocation(form.destination.location),
      passengers: form.passengers.value,
      startDate: this.formatDate(form.date.startDate),
      returnDate: form.date.returnDate
        ? this.formatDate(form.date.returnDate)
        : undefined,
    };

    if (reverse) {
      [optionSearch.destination, optionSearch.origin] = [
        optionSearch.origin,
        optionSearch.destination,
      ];
    }

    this.store.dispatch(new AddSearch(optionSearch));
  }

  private changeLocation(location: string): string {
    return location.split(' ').reverse()[0];
  }

  private formatDate(date: Date): string {
    const year = `20${date.getFullYear() % 100}`;
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    day.length === 1 ? (day = '0' + day) : '';
    month.length === 1 ? (month = '0' + month) : '';
    return `${year}-${month}-${day}`;
  }
}
