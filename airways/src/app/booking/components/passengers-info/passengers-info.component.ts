import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPassengerData } from 'src/app/shared/models/models';
import { IPassengers, ISearchMain } from 'src/app/store/models/searchMainModel';

@Component({
  selector: 'app-passengers-info',
  templateUrl: './passengers-info.component.html',
  styleUrls: ['./passengers-info.component.scss']
})
export class PassengersInfoComponent implements OnInit {

  signUpForm!: FormGroup;

  public adultData: IPassengerData;
  public childData: IPassengerData;
  public infantData: IPassengerData;

  public ageCategory = {
    adult: 'Adult',
    child: 'Child',
    infant: 'Infant'
  }

  private mockPassengers: IPassengers[] = [{
    name: ' Adult',
    desc: '',
    value: 2,
  }, {
    name: ' Child',
    desc: '',
    value: 2,
  }, {
    name: 'Infant',
    desc: '',
    value: 2,
  }];

  public passengers: string[];

  ngOnInit(): void {
    this.passengers = this.mockPassengers.map((passenger) => [...Array(passenger.value).fill(passenger.name)]).flat(1);
console.log(this.passengers);

    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

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
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(12),
        Validators.pattern('[0-9-]*'),
      ]),
      termsAndConditions: new FormControl('', Validators.required),
      citizenship: new FormControl('', Validators.required),
      phoneCodeCountry: new FormControl('', Validators.required),
      datepicker: new FormControl(),
      gender: new FormControl('male'),
    });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get phoneNumber() {
    return this.signUpForm.get('phoneNumber');
  }

  get phoneCodeCountry() {
    return this.signUpForm.get('phoneCodeCountry');
  }

  validateInput(key: AbstractControl | null) {
    key?.markAsTouched();
    key?.updateValueAndValidity();
  }

  onGenderChange(event: { source: unknown; value: string }) {
    if (this.signUpForm) {
      this.signUpForm.get('gender')?.setValue(event.value);
    }
  }

  onSubmit(form: FormGroup) {
    console.log(this.adultData);
  }
}
