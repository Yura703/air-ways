import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPassengerData } from 'src/app/shared/models/models';

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

  public displayGenderIcon = 0;

  public countPassengers = 1;

  ngOnInit(): void {
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
      gender: new FormControl(),
      datepicker: new FormControl(),
      assistance: new FormControl(),
    });
  }

  // get email() {
  //   return this.signUpForm.get('email');
  // }

  // get firstName() {
  //   return this.signUpForm.get('firstName');
  // }
  // get lastName() {
  //   return this.signUpForm.get('lastName');
  // }
  // get phoneNumber() {
  //   return this.signUpForm.get('phoneNumber');
  // }

  // get phoneCodeCountry() {
  //   return this.signUpForm.get('phoneCodeCountry');
  // }
  // get gender() {
  //   return this.signUpForm.get('gender');
  // // }

  // validateInput(key: AbstractControl | null) {
  //   key?.markAsTouched();
  //   key?.updateValueAndValidity();
  // }

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
}
