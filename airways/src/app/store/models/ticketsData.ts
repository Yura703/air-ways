export interface ITicketsData {
  email: string;
  phoneNumber: string;
  phoneCodeCountry: {
      name: string;
      dial_code: string;
      code: string;
  };
  adult: ITicketPerson[];
  child: ITicketPerson[];
  infant: ITicketPerson[];
}

export interface ITicketPerson {
  firstName: string;
  lastName: string;
  gender: string;
  datepicker: string;
  assistance?: boolean;
  luggage?: boolean;
}

export interface ICostTickets {
  adult: number;
  child: number;
  infant: number;
  adultTax: number;
  childTax: number;
  infantTax: number;
  adultFare: number;
  childFare: number;
  infantFare: number;
  total: number;
}


