import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: IFlightInfo[];
}

export interface IFlightInfo {
  item: string;
  flight: string;
  typeTrip: string;
  data: string;
  passengers: string;
  price: string;
  completed: boolean;
  color: ThemePalette;
}

const itemFlight: IFlightInfo = {
  item: 'FR 1925',
  flight: 'Dublin - Warshawa',
  typeTrip: 'Round trip',
  data: 'fsdfsdf',
  passengers: 'fdsfsdf',
  price: '551',
  completed: false,
  color: 'warn',
}

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {
  titleCartTable = ['№', 'Flight', 'Type trip', 'Data & Time', 'Passengers', 'Price'];
  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      itemFlight,
      itemFlight
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
