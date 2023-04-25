import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  selectedOption: string | undefined;

  constructor(public dialogRef: MatDialogRef<SignUpComponent>) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        this.strongPasswordValidator,
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
  validateInput(key: any) {
    key.markAsTouched();
    key.updateValueAndValidity();
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(this.signUpForm.value); // отправка данных на сервер
      this.dialogRef.close();
    } else {
      // Пользователю выводятся соответствующие предупреждения
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched();
      });
    }
  }

  strongPasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasSpecialCharacters = /[!@#?]/.test(value);

    if (!value) {
      return null;
    }
    if (
      value &&
      value.length >= 8 &&
      hasNumber &&
      hasUppercase &&
      hasLowercase &&
      hasSpecialCharacters
    ) {
      return null;
    }
    return { strongPassword: true };
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

  //открывает подсказку по клику
  // @ViewChild('myTooltip') myTooltip: MatTooltip | undefined;
  // public displayTooltip() {
  //   if (this.myTooltip) {
  //     this.myTooltip.disabled = false;
  //     this.myTooltip.show();
  //     setTimeout(() => {
  //       if (this.myTooltip) {
  //         this.myTooltip.disabled = true;
  //       }
  //     }, 2000);
  //   }
  // }
}
