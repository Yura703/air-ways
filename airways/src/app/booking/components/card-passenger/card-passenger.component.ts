import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPassengerData } from 'src/app/shared/models/models';
import { FormErrorMessage } from '../../models/error-message';

@Component({
  selector: 'app-card-passenger',
  templateUrl: './card-passenger.component.html',
  styleUrls: ['./card-passenger.component.scss']
})
export class CardPassengerComponent implements OnInit {
  @Input()  passengerData!: IPassengerData;
  @Input()  ageCategory!: string;
  @Output() passengerDataChange = new EventEmitter<IPassengerData>();

  public passengerForm!: FormGroup;

  public errors: { [key: string]: string } = {};

  public displayGenderIcon = 0;

  public countPassengers = 1;

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
    });

    this.passengerForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  onGenderChange(event: { source: unknown; value: string }) {
    if (event.value === 'male') this.displayGenderIcon = 1;
    else this.displayGenderIcon = 2;
    if (this.passengerForm) {
      this.passengerForm.get('gender')?.setValue(event.value);
    }
  }

  onSubmit(form: FormGroup) {
    this.passengerDataChange.emit({ ...form.value } as IPassengerData)
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
}
