import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  IDateApi,
  IFlightData,
  IMissingData,
} from 'src/app/store/models/responseApiFlightModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { ICostTickets, ITicketPerson, ITicketsData } from 'src/app/store/models/ticketsData';
import {
  selectAllFlight,
  selectSearchMain,
} from 'src/app/store/selectors/selectors';

@Injectable({
  providedIn: 'root',
})
export default class BookingService {
  public btnContinueIsDisabled$ = new BehaviorSubject(true);

  public typeFlyRoundOrOneWay$ = new BehaviorSubject(true);

  private selectTicketIsOpen = { to: false, from: false };

  private numberSeat = 0;

  constructor(private store: Store<IAppStore>) {}

  public getSearchData() {
    return this.store.pipe(select(selectSearchMain));
  }

  public changeDisabledBtnContinue(value: { [x: string]: boolean }, oneOrRound: boolean) {
    this.selectTicketIsOpen = {
      ...this.selectTicketIsOpen,
      ...value,
    };
console.log('selectTicketIsOpen=', this.selectTicketIsOpen);

    let isDisabled = false;

    if (oneOrRound) {
      isDisabled = !(
        this.selectTicketIsOpen.to && this.selectTicketIsOpen.from
      );
    } else {
      isDisabled = !(
        this.selectTicketIsOpen.to || this.selectTicketIsOpen.from
      );
    }

    this.btnContinueIsDisabled$.next(isDisabled);
  }

  public getFlightDate(toOrFrom: boolean): Observable<IFlightData[]> {
    return this.store.pipe(
      select(selectAllFlight),
      map((data: IDateApi[]) => {
        const _data = [...data];
        _data.sort((a: IDateApi, b: IDateApi) => {
          return Number(new Date(a.departure_at)) <
            Number(new Date(b.departure_at))
            ? -1
            : 1;
        });
        return _data;
      }),
      map((dataApi: IDateApi[]) => {
        return dataApi.map((data) => {
          return {
            ...data,
            ...this.getMissingData(data),
          };
        });
      }),
      map((dataApi) => {
        let destination = '';

        return dataApi.filter((data, index) => {
          if (index === 0) destination = data.origin;
          return toOrFrom
            ? data.destination === destination
            : data.destination !== destination;
        });
      })
    );
  }

  private getMissingData(data: IDateApi): IMissingData {
    return {
      utc: 'UTC+0',
      type: this.getTypeFly(),
      tymeFly: this.getDateFlightTo(data).tymeFly.toString(), //'2h 50m',
      //flightNo: this.getFlightNamber(),
      countSeatsAvailable: Math.ceil(Math.random() * 200),
      dateFlightTo: this.getDateFlightTo(data).dateFlightTo.toString(),
    };
  }

  private getTypeFly() {
    return Math.ceil(Math.random() * 100) % 2 === 1 ? 'Direct' : 'Non-stop';
  }

  private getDateFlightTo(data: IDateApi) {
    return {
      tymeFly: new Date(data.duration_to * 60000),
      dateFlightTo: new Date(+new Date(data.departure_at) + +new Date(data.duration_to * 60000)),
    }
  }

  public changeTicketsData(ticketsData: Partial<ITicketsData>) {
    let returnTicketsData = {} as ITicketsData;

    Object.keys(ticketsData).map((key) => {
      if (key.includes('Adult')) {
        const adultData: ITicketPerson = ticketsData[key as keyof ITicketsData] as unknown as ITicketPerson;
        const adult: ITicketPerson[] = returnTicketsData?.adult
          ? [...(returnTicketsData.adult), adultData]
          : [adultData];

          returnTicketsData = {
            ...returnTicketsData,
            adult,
          }
      } else if (key.includes('Child')) {
        const childData: ITicketPerson = ticketsData[key as keyof ITicketsData] as unknown as ITicketPerson;
        const child =returnTicketsData?.child
          ? [...(returnTicketsData.child), childData]
          : [childData];

        returnTicketsData = {
          ...returnTicketsData,
          child,
        }
      } else if (key.includes('Infant')) {
        const infantData: ITicketPerson = ticketsData[key as keyof ITicketsData] as unknown as ITicketPerson;
        const infant = returnTicketsData?.infant
          ? [...(returnTicketsData.infant), infantData]
          : [infantData];

          returnTicketsData = {
          ...returnTicketsData,
          infant,
        }
      } else {
        const value = ticketsData[key as keyof ITicketsData];

        returnTicketsData =  {
          ...returnTicketsData,
         [key]:value,
        }
      }
    });

    return returnTicketsData;
  }

  public getCostTickets(costTickets: ICostTickets) {
    const childFare = costTickets.adultFare / 2;
    const infantFare = costTickets.adultFare / 10;

    return {
      ...costTickets,
      adultTax: costTickets.adultFare / 10,
      childTax: childFare / 10,
      infantTax: infantFare / 10,
      childFare: childFare,
      infantFare: infantFare,
      total: costTickets.adultFare * costTickets.adult + childFare * costTickets.child + infantFare * costTickets.infant,
    };
  }

  // public getSeat() {
  //   return ++this.numberSeat;
  // }
}
