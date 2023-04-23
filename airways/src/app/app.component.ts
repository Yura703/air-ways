import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airways';

  private dialogRef!: MatDialogRef<PopUpComponent>;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialogRef = this.dialog.open(PopUpComponent, {
      width: '494px',
    });
  }
}
