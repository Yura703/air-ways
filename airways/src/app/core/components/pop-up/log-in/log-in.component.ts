import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<LogInComponent>) {}
  selectedOption: string | undefined;

  ngOnInit() {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        this.strongPasswordValidator,
      ]),
    });
  }

  get email() {
    return this.logInForm.get('email');
  }
  get password() {
    return this.logInForm.get('password');
  }

  //проверяет ввод при изменении инпута
  validateInput(key: any) {
    key.markAsTouched();
    key.updateValueAndValidity();
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

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(this.logInForm.value); // отправка данных на сервер
      this.dialogRef.close();
    } else {
      // Пользователю выводятся соответствующие предупреждения
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched();
      });
    }
  }
}
