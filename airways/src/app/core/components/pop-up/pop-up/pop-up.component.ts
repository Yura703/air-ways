import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  childType = 'signUp';

  toggleChild() {
    this.childType = this.childType === 'signUp' ? 'logIn' : 'signUp';
  }
}
