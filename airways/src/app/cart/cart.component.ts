import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IFlightInfo } from '../core/components/item-cart-flight/item-cart-flight.component';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: IFlightInfo[];
}

const itemFlight: IFlightInfo = {
  item: 'FR 1925',
  flight: 'Dublin - Warshawa',
  typeTrip: 'Round trip',
  data: 'fsdfsdf',
  passengers: 'fdsfsdf',
  price: 551,
  completed: false,
  color: 'warn',
};

const itemFlight1: IFlightInfo = {
  item: 'FR 192523',
  flight: 'Dublin - Warshawa',
  typeTrip: 'Round trip',
  data: 'fsdf',
  passengers: 'fdsfsdf',
  price: 551,
  completed: false,
  color: 'warn',
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  titleCartTable = [
    '№',
    'Flight',
    'Type trip',
    'Data & Time',
    'Passengers',
    'Price',
  ];
  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [itemFlight, itemFlight1],
  };

  allComplete = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
