import { Component, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MoneyChange } from 'src/app/store/actions/actions';
import { IMoneyFormat } from 'src/app/store/models/moneyFormat';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFormatMoney } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-select-money-format',
  templateUrl: './select-money-format.component.html',
  styleUrls: ['./select-money-format.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectMoneyFormatComponent {
  selectFormatMoney$ = this.store.pipe(select(selectFormatMoney));
  arrSelectFormatDate: IMoneyFormat[] = ['EUR', 'USD', 'RUB', 'BYN', 'GBP'];

  constructor(private store: Store<IAppStore>) { }

  changeMoney(option: IMoneyFormat) {
    if (option !== "RUB") {
      this.store.dispatch(new MoneyChange(option));
    }
  }
}


