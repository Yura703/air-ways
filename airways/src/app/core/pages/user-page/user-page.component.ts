import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFlightInfo } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  flightInfo$ = this.store.select(selectFlightInfo);
  constructor(private store: Store<IAppStore>) { }
}
