import { IPassengers } from "./searchMainModel";

export interface IFlightInfo {
    item: string;
    flight: string;
    typeTrip: string;
    data: string;
    passengers: IPassengers[];
    price: number;
  }