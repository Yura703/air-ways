import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, tap } from 'rxjs';
import { fakeUser } from '../../../../constants/fake-user';
import { ServerDataInterface } from '../../../../shared/models/server-data.inerface';
import { UserInterface } from '../../../../shared/models/server-user.interface';
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
  @ViewChild('googleButton') googleButton!: ElementRef;
  logInForm!: FormGroup;

  public authUserData: SignUpInterface | string;

  userName: string;

  logIn: boolean;

  errorMessage: string;
  selectedOption: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<LogInComponent>,
    private authUserDataService: AuthUserDataService,
    private authService: SocialAuthService,
    private googleAuthService: GoogleAuthService
  ) {}

  get email() {
    return this.logInForm.get('email');
  }

  get password() {
    return this.logInForm.get('password');
  }

  ngOnInit() {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.fakeAuth();
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.googleAuthService
        .logIn(this.logInForm.value.email, this.logInForm.value.password)
        .subscribe({
          next: (response: ServerDataInterface) => {
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
            this.errorMessage = err.error;
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

  fakeAuthLogIn() {
    this.logInForm.get('email')?.setValue(fakeUser.email);
  }

  removeUser() {
    this.googleAuthService.lengthUsersArray().subscribe({
      next: (response: UserInterface[]) => {
        response.forEach((el: UserInterface) => {
          this.googleAuthService
            .removeUser(el.id)
            .pipe(
              tap(() => {
                // console.log(
                //   `User with ID ${el.id} has been successfully removed.`
                // );
              }),
              catchError((error) => {
                console.error(
                  `Failed to remove user with ID ${el.id}. Error: ${error}`
                );
                return []; // Returning an empty observable to continue the stream
              })
            )
            .subscribe();
        });
      },
      error: (err) => {
        console.error(err.error);
      },
    });
  }

  continueWithGoogle() {
    this.googleButton.nativeElement.querySelector('div[role="button"]').click();
    this.authService.authState.subscribe((user) => {
      this.logInForm.get('email')?.setValue(user.email);
    });
  }
}
