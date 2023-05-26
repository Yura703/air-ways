import { Component, OnInit } from '@angular/core';
import { AuthUserDataService } from '../../services/auth-user-data.service';
import { OpenDialogService } from '../../services/open-dialog.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  logIn = false;

  userName = 'Sign in';

  constructor(
    private authUserDataService: AuthUserDataService,
    private openDialogService: OpenDialogService
  ) {}

  ngOnInit(): void {
    this.authUserDataService.logIn.subscribe((value: boolean) => {
      this.logIn = value;
    });
    this.authUserDataService.userName.subscribe((value: string) => {
      if (value) {
        this.userName = value;
      }
    });
  }
  openDialog() {
    this.openDialogService.openDialog();
  }
  clearLocalStorage() {
    this.userName = 'Sign in';
    this.logIn = false;
    this.authUserDataService.logIn.next(this.logIn);
    this.authUserDataService.userName.next(this.userName);
  }
}
