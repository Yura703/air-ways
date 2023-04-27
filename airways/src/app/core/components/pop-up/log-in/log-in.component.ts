import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SignUpInterface } from '../../../../shared/models/sign-up-interface';
import { AuthUserDataService } from '../../../services/auth-user-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;
  public authUserData: SignUpInterface | string;

  constructor(
    public dialogRef: MatDialogRef<LogInComponent>,
    private authUserDataService: AuthUserDataService
  ) {}
  selectedOption: string | undefined;

  ngOnInit() {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.fakeAuth();
  }

  get email() {
    return this.logInForm.get('email');
  }
  get password() {
    return this.logInForm.get('password');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.authUserDataService.authUserDataIn.next(this.authUserData);
      this.dialogRef.close();
    } else {
      // Пользователю выводятся соответствующие предупреждения
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched();
      });
    }
  }

  fakeAuth() {
    if (this.authUserDataService.authUserDataUp) {
      this.authUserDataService.authUserDataUp.subscribe(
        (value: SignUpInterface | string) => {
          if (value) {
            this.authUserData = value;
            if (typeof this.authUserData !== 'string') {
              this.logInForm.get('email')?.setValue(this.authUserData.email);
              this.logInForm
                .get('password')
                ?.setValue(this.authUserData?.password);
            }
          }
        }
      );
    }
  }
}
