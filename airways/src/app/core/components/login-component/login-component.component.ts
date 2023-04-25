import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent {
  private dialogRef!: MatDialogRef<PopUpComponent>;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialogRef = this.dialog.open(PopUpComponent, {
      width: '494px',
    });
  }
}
