import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.logInForm.get('email');
  }
  get password() {
    return this.logInForm.get('password');
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
