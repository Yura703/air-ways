import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BASIC_URL_CURRATE } from 'src/app/constants/const';
import { IMoneyFormat } from 'src/app/store/models/moneyFormat';
import { ICurrateApi } from 'src/app/store/models/responseApiCurrate';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFormatMoney } from 'src/app/store/selectors/selectors';

@Injectable({
  providedIn: 'root'
})
export class ApiCurrateService {

  constructor(private store: Store<IAppStore>, private http: HttpClient) { }
  selectFormat: IMoneyFormat;
  selectFormat$ = this.store.pipe(select(selectFormatMoney))

  getExchangeRate() {
    this.selectFormat$.subscribe((format) => this.selectFormat = format);
    return this.http.get<ICurrateApi>(
      `${BASIC_URL_CURRATE}${this.selectFormat}`, {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    }
    );
  }

}
