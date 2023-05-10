import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  childType = 'logIn';

  toggleChild() {
    this.childType = this.childType === 'logIn' ? 'signUp' : 'logIn';
  }
}
