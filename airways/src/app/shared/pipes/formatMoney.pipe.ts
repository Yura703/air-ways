import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable, of } from 'rxjs';
import { IAppStore } from '../../store/models/stateModel';
import {
  selectExchangeRate,
  selectFormatMoney,
} from '../../store/selectors/selectors';

@Pipe({
  name: 'formatMoney',
})
export class FormatMoneyPipe implements PipeTransform {
  constructor(private store: Store<IAppStore>) {}

  moneyFormat$ = this.store.select(selectFormatMoney);
  exchangeRate$ = this.store.select(selectExchangeRate);

  transform(value: number | undefined): Observable<string> {
    if (!value) return of('');

    return this.exchangeRate$.pipe(
      map((val) => String((val * value).toFixed(2))),
      mergeMap((price) =>
        this.moneyFormat$.pipe(
          map((res) => {
            switch (res) {
              case 'USD':
                return '$' + price;
              case 'BYN':
                return 'Br' + price;
              case 'EUR':
                return '€' + price;
              case 'GBP':
                return '£' + price;
              default:
                return '₽' + price;
            }
          })
        )
      )
    );
  }
}
