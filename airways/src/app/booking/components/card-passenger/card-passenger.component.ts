import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ITicketPerson, ITicketsData } from 'src/app/store/models/ticketsData';
import { FormErrorMessage } from '../../models/error-message';

@Component({
  selector: 'app-card-passenger',
  templateUrl: './card-passenger.component.html',
  styleUrls: ['./card-passenger.component.scss']
})
export class CardPassengerComponent implements OnInit, OnDestroy {

  @Input() parentForm!: FormGroup;

  @Input()  ageCategory!: string;

  @Input()  personData: ITicketPerson | undefined;

  private ngUnsubscribe = new Subject<void>();

  public passengerForm!: FormGroup;

  public errors: { [key: string]: string } = {};

  public displayGenderIcon = 0;

  public maxDatePicker: Date;

  ngOnInit(): void {
    this.maxDatePicker = new Date();

    this.passengerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      datepicker: new FormControl('', [
        Validators.required,
        Validators.max(Number(new Date())),
      ]),
      assistance: new FormControl(),
      luggage: new FormControl(),
    });

    this.passengerForm.statusChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => this.updateErrorMessages());

    this.parentForm.addControl(this.ageCategory, this.passengerForm);

    if (this.personData) {
      this.passengerForm.patchValue(this.personData);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onGenderChange(event: { source: unknown; value: string }) {
    if (event.value === 'male') this.displayGenderIcon = 1;
    else this.displayGenderIcon = 2;
    if (this.passengerForm) {
      this.passengerForm.get('gender')?.setValue(event.value);
    }
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of FormErrorMessage) {
      const control = this.passengerForm.get(message.forControl);
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

  isNotInfant(): boolean {
    return !this.ageCategory.includes('Infant');
  }
}
