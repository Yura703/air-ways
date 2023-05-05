import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { fakeUser } from '../../../../constants/fake-user';
import { AuthUserDataService } from '../../../services/auth-user-data.service';
import { FormValidationService } from '../../../services/form-validation.service';
import { GoogleAuthService } from '../../../services/google-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Input() parent: { childType: string };
  @ViewChild('googleButton') googleButton!: ElementRef;
  signUpForm!: FormGroup;

  user: SocialUser | undefined;

  loggedIn: boolean | undefined;
  errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    private formValidationService: FormValidationService,
    private authUserDataService: AuthUserDataService,
    private authService: SocialAuthService,
    private googleAuthService: GoogleAuthService
  ) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        this.formValidationService.strongPasswordValidator,
      ]),
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
    this.getGoogleUserData();
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get phoneNumber() {
    return this.signUpForm.get('phoneNumber');
  }
  get termsAndConditions() {
    return this.signUpForm.get('termsAndConditions');
  }
  get citizenship() {
    return this.signUpForm.get('citizenship');
  }
  get phoneCodeCountry() {
    return this.signUpForm.get('phoneCodeCountry');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }

  handleCitizenshipChange(value: string) {
    this.citizenship?.setValue(value); // обновляем FormControl со значением mat-select
  }

  handlePhoneCodeCountryChange(value: string) {
    this.phoneCodeCountry?.setValue(value); // обновляем FormControl со значением mat-select
  }

  //проверяет ввод при изменении инпута
  validateInput(key: AbstractControl | null) {
    key?.markAsTouched();
    key?.updateValueAndValidity();
  }
  toggleChild() {
    this.parent.childType =
      this.parent.childType === 'signUp' ? 'logIn' : 'signUp';
  }
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.googleAuthService
        .createUser(
          this.signUpForm.value.email,
          this.signUpForm.value.password,
          this.signUpForm.value.firstName,
          this.signUpForm.value.lastName
        )
        .subscribe({
          next: (response) => {
            console.log(response);
            this.authUserDataService.authUserDataUp.next(this.signUpForm.value);
            this.toggleChild();
          },
          error: (err) => {
            console.error(err.error);
            if (err.error === 'Email already exists') {
              this.errorMessage = err.error; // Вывести сообщение об ошибке
            }
          },
        }); //------------------------------------------------------------------ отправка данных на сервер

      // this.dialogRef.close();
    } else {
      // Пользователю выводятся соответствующие предупреждения
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched();
      });
    }
  }

  onGenderChange(event: { source: unknown; value: string }) {
    if (this.signUpForm) {
      this.signUpForm.get('gender')?.setValue(event.value);
    }
  }

  onInput(event: any) {
    // Получаем значение поля ввода
    let value = event.target.value;
    // Удаляем все дефисы из введенного значения
    value = value.replace(/-/g, '');
    // Добавляем дефисы после каждых трех цифр
    if (value.length > 3) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    }
    if (value.length > 7) {
      value = value.slice(0, 7) + '-' + value.slice(7);
    }
    // Устанавливаем новое значение поля ввода
    event.target.value = value;
  }

  fakeAuth() {
    this.signUpForm.get('firstName')?.setValue(fakeUser.firstName);
    this.signUpForm.get('lastName')?.setValue(fakeUser.lastName);
    this.signUpForm.get('email')?.setValue(fakeUser.email);
    this.signUpForm.get('phoneNumber')?.setValue(fakeUser.phoneNumber);
  }

  getGoogleUserData() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.signUpForm.get('firstName')?.setValue(user.firstName);
      this.signUpForm.get('lastName')?.setValue(user.lastName);
      this.signUpForm.get('email')?.setValue(user.email);
      this.loggedIn = true;
      console.log(user);
    });
  }

  continueWithGoogle() {
    this.googleButton.nativeElement.querySelector('div[role="button"]').click();
  }
}
