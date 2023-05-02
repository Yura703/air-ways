import { IPassengers } from "./searchMainModel";

export interface IOptionsSearch {
    type: string;
    origin: string;
    destination: string;
    passengers: IPassengers[];
    startDate: string;
    returnDate?: string;
}