export interface IPassengers {
    name: string;
    desc: string;
    value: number;
}

export interface ILocation {
    location: string;
}

export interface ISearchMain {
    destination: ILocation;
    origin: ILocation;
    type: string;
    date: {
        startDate: Date,
        returnDate?: Date,
    }
    passengers: IPassengers[];
}