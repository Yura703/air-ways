import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServerDataInterface } from '../../../../shared/models/server-data.inerface';
import { SignUpInterface } from '../../../../shared/models/sign-up-interface';
import { AuthUserDataService } from '../../../services/auth-user-data.service';
import { GoogleAuthService } from '../../../services/google-auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  @Input() parent: { childType: string };
  logInForm!: FormGroup;

  public authUserData: SignUpInterface | string;

  userName: string;

  errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<LogInComponent>,
    private authUserDataService: AuthUserDataService,
    private authService: SocialAuthService,
    private googleAuthService: GoogleAuthService
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
      this.googleAuthService
        .logIn(this.logInForm.value.email, this.logInForm.value.password)
        .subscribe({
          next: (response: ServerDataInterface) => {
            // const serverData = response as ServerDataInterface;
            console.log(response);
            if (typeof this.authUserData !== 'string') {
              this.logInForm.get('email')?.setValue(this.logInForm.value.email);
              this.logInForm
                .get('password')
                ?.setValue(this.logInForm.value.password);
              this.userName = `${response.user.firstName} ${response.user.lastName}`;
            }
            this.authUserDataService.userName.next(this.userName);
            this.authUserDataService.logIn.next(true);
            this.dialogRef.close();
          },
          error: (err) => {
            console.error(err.error);
            if (err.error === 'Incorrect password') {
              this.errorMessage = err.error;
            }
          },
        });
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
  removeUser() {
    this.googleAuthService.removeUser().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err.error);
      },
    });
  }
}
