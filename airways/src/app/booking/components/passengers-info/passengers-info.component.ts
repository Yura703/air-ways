import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { IPassengerData } from 'src/app/shared/models/models';
import { AddTicketsData } from 'src/app/store/actions/actions';
import { IOptionsSearch } from 'src/app/store/models/optionsSearch';
import { IAppStore } from 'src/app/store/models/stateModel';
import { ITicketsData } from 'src/app/store/models/ticketsData';
import { selectSearchMain } from 'src/app/store/selectors/selectors';
import { FormErrorMessage } from '../../models/error-message';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-passengers-info',
  templateUrl: './passengers-info.component.html',
  styleUrls: ['./passengers-info.component.scss']
})
export class PassengersInfoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() continueBtnChange: boolean;

  private ngUnsubscribe = new Subject<void>();

  public passengerInfoForm!: FormGroup;

  public ticketsData$: Observable<ITicketsData>;

  public adultData: IPassengerData[];
  public childData: IPassengerData[];
  public infantData: IPassengerData[];

  public searchData$: Observable<IOptionsSearch>;

  public ageCategory = {
    adult: ' Adult',
    child: ' Child',
    infant: ' Infant'
  }

  public errors: { [key: string]: string } = {};

  public passengers: string[];

  public searchData: IOptionsSearch;

  public btnContinueIsDisabled$: BehaviorSubject<boolean>;

  constructor(public store: Store<IAppStore>, private bookingService: BookingService) {}

  ngOnChanges() {
    this.onSubmit(this.passengerInfoForm);
  }

  ngOnInit(): void {
    this.bookingService.btnContinueIsDisabled$.next(false);

    this.searchData$ = this.store.pipe(select(selectSearchMain));

    this.searchData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (searchData) => this.searchData = searchData
    );

    this.passengers = this.searchData.passengers.map((passenger) => [...Array(passenger.value).fill(passenger.name)]).flat(1);

    this.passengerInfoForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(12),
        Validators.pattern('[0-9-]*'),
      ]),

      phoneCodeCountry: new FormControl('', Validators.required),

    });

    this.passengerInfoForm.statusChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => this.updateErrorMessages());
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of FormErrorMessage) {
      const control = this.passengerInfoForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors?.[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  get email() {
    return this.passengerInfoForm.get('email');
  }

  get phoneNumber() {
    return this.passengerInfoForm.get('phoneNumber');
  }

  get phoneCodeCountry() {
    return this.passengerInfoForm.get('phoneCodeCountry');
  }

  onGenderChange(event: { source: unknown; value: string }) {
    if (this.passengerInfoForm) {
      this.passengerInfoForm.get('gender')?.setValue(event.value);
    }
  }

  handlePhoneCodeCountryChange(value: string) {
    this.phoneCodeCountry?.setValue(value);
  }

  onInput(event:any ) {
    let value = event.target.value;
    value = value.replace(/-/g, '');
    if (value.length > 3) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    }
    if (value.length > 7) {
      value = value.slice(0, 7) + '-' + value.slice(7);
    }
    event.target.value = value;
  }

  validateInput(key: AbstractControl | null) {
    key?.markAsTouched();
    key?.updateValueAndValidity();
  }

  onSubmit(form: FormGroup) {
    if( form && form.status === "VALID") {
      const ticketsData = form.value;

      const changeTicketData = this.bookingService.changeTicketsData(ticketsData);


      this.store.dispatch(new AddTicketsData({
        ...changeTicketData,
      }));

    }
    // this.ticketsData$ = this.store.pipe(select(selectTicketsData));
    // this.ticketsData$.subscribe((data) => {
    //   console.log(data);
    // });
  }
}
