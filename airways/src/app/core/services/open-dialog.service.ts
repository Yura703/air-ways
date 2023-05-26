import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from '../components/pop-up/pop-up/pop-up.component';

@Injectable({
  providedIn: 'root',
})
export class OpenDialogService {
  private dialogRef!: MatDialogRef<PopUpComponent>;

  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialogRef = this.dialog.open(PopUpComponent, {
      width: '494px',
    });
  }
}
