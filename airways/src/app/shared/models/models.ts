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
