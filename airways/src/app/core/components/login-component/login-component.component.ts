import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthUserDataService } from '../../services/auth-user-data.service';
import { PopUpComponent } from '../pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  private dialogRef!: MatDialogRef<PopUpComponent>;
  logIn = true;
  userName = 'Sign in';
  constructor(
    private dialog: MatDialog,
    private authUserDataService: AuthUserDataService
  ) {}

  ngOnInit(): void {
    this.authUserDataService.userName.subscribe((value: string) => {
      if (value) {
        this.userName = value;
      }
    });
    this.authUserDataService.logIn.subscribe((value: boolean) => {
      this.logIn = value;
    });
  }
  openDialog() {
    this.dialogRef = this.dialog.open(PopUpComponent, {
      width: '494px',
    });
  }
  clearLocalStorage() {
    this.authUserDataService.logIn.next(false);
    this.userName = 'Sign in';
  }
}
