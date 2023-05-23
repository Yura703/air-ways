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

