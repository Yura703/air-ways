import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable, of } from 'rxjs';
import { IFlightInfo } from 'src/app/store/models/flightInfo';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFlightInfo } from 'src/app/store/selectors/selectors';

interface IFlightInfoCart extends IFlightInfo {
  completed: boolean;
}

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {
  flightInfoCart: IFlightInfoCart[];
  allComplete: boolean = false;
  selectValue: number;
  flightInfo$ = this.store.select(selectFlightInfo).pipe(
    map(value => value.map(item => { return { ...item, 'completed': false } })));

  constructor(private store: Store<IAppStore>) { }

  ngOnInit(): void {
    this.flightInfo$.subscribe(val => this.flightInfoCart = val);
    this.updateSelect();
  }

  updateAllComplete() {
    this.allComplete = this.flightInfoCart != null && this.flightInfoCart.every(t => t.completed);
    this.updateSelect();
  }

  someComplete(): boolean {
    if (this.flightInfoCart == null) {
      return false;
    }
    return this.flightInfoCart.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {

    this.allComplete = completed;
    if (this.flightInfoCart == null) {
      return;
    }
    this.flightInfoCart.forEach(t => (t.completed = completed));
    this.updateSelect();
  }

  private updateSelect() {
    this.selectValue = 0;
    this.flightInfoCart.map(item =>
      item.completed ? this.selectValue++ : this.selectValue
    )
  }
}
