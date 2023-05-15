export interface IDataAirport {
    IATACode: string;
    nameAirport: string;
    nameCity: string;
}

export interface ISearchData {
  sityFrom: string,
  sityFromABBR: string,
  sityTo: string,
  sityToABBR: string,
  departureDate: string,
  arrivalDate: string,
  passengers: {
    adult: string,
    child: string,
    infant: string,
  }
}

export interface ITicketData extends ISearchData {
  currency: '€' | '$' | '₽' | 'Zł';
  ticketPrice: string;
}

export interface IPassengersData {
  adult: IPassengerData,
  child?: IPassengerData,
  infant?: IPassengerData,
  contactDetals: IContactDetals,
}

export interface IPassengerData {
  firstName: string,
  lastName: string,
  gender: 'male' | 'female',
  dateBirth: string,
  assistance?: boolean;
}

export interface IContactDetals {
  countryCode: string,
  phoneNumber: string,
  email: string,
}
