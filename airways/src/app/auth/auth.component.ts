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
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  titleUserTable = [
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
  description(flight: string) {
    console.log(flight);
  }
}
