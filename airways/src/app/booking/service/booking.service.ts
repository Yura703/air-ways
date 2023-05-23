import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import {
  IDateApi,
  IFlightData,
  IMissingData,
} from 'src/app/store/models/responseApiFlightModel';
import { ISelectedTickets } from 'src/app/store/models/selectedTickets';
import { IAppStore } from 'src/app/store/models/stateModel';
import { ITicketPerson, ITicketsData } from 'src/app/store/models/ticketsData';
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

  public selectedTickets$ = new Subject<ISelectedTickets>();

  private selectTicketIsOpen = { to: false, from: false };

  constructor(private store: Store<IAppStore>) {}

  public getSearchData() {
    return this.store.pipe(select(selectSearchMain));
  }

  public changeDisabledBtnContinue(value: { [x: string]: boolean }) {
    this.selectTicketIsOpen = {
      ...this.selectTicketIsOpen,
      ...value,
    };

    const isDisabled = !(
      this.selectTicketIsOpen.to && this.selectTicketIsOpen.from
    );
    this.btnContinueIsDisabled$.next(isDisabled);
  }

  public getFlightDate(toOrFrom: boolean): Observable<IFlightData[]> {
    return this.store.pipe(
      select(selectAllFlight),
      map((data: IDateApi[]) => {
        const _data = [...data];
        _data.sort((a: IDateApi, b: IDateApi) => {
          return Number(new Date(a.depart_date)) <
            Number(new Date(b.depart_date))
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
      tymeFly: this.getDateFlightTo(
        data.distance,
        data.depart_date
      ).tymeFly.toString(), //'2h 50m',
      flightNo: this.getFlightNamber(),
      countSeatsAvailable: Math.ceil(Math.random() * 200),
      dateFlightTo: this.getDateFlightTo(
        data.distance,
        data.depart_date
      ).dateFlightTo.toString(),
    };
  }

  private getFlightNamber() {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const str =
      abc[Math.floor(Math.random() * abc.length)] +
      abc[Math.floor(Math.random() * abc.length)];
    return str + ' ' + Math.ceil(Math.random() * 899 + 999);
  }

  private getTypeFly() {
    return Math.ceil(Math.random() * 100) % 2 === 1 ? 'Direct' : 'Non-stop';
  }

  private getDateFlightTo(distance: number, departureDate: string) {
    const tymeFly = new Date(
      Number(new Date(distance * Math.random() * 10000))
    );
    const dateFlightTo = new Date(
      Number(tymeFly) + Number(new Date(departureDate))
    );

    return {
      dateFlightTo,
      tymeFly,
    };
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
}


