export interface IResponseApi {
    currency: string;
    data: IDateApi[];
    error: string;
    success: boolean;
}

export interface IDateApi {
    origin: string;
    origin_airport: string;
    destination: string;
    destination_airport: string;
    departure_at: string;
    return_at: string;
    price: number;
    airline: string;
    flight_number: string;
    transfers: number;
    return_transfers: number;
    duration: number;
    duration_to: number;
    duration_back: number;
    link: string;
}

export interface IMissingData {
  utc: string, //'UTC +0',
  type: 'Direct' | 'Non-stop',
  tymeFly: string,//'2h 50m',
  //flightNo: string,//'FR 1925',
  countSeatsAvailable: number,//'100',
  dateFlightTo: string,
}

export interface IFlightData extends IDateApi, IMissingData {}

// {
//   "origin": "BER",
//   "destination": "NYC",
//   "origin_airport": "BER",
//   "destination_airport": "JFK",
//   "price": 41073,
//   "airline": "BA",
//   "flight_number": "991",
//   "departure_at": "2023-05-24T11:10:00+02:00",
//   "return_at": "2023-06-02T09:16:00-04:00",
//   "transfers": 1,
//   "return_transfers": 2,
//   "duration": 2414,
//   "duration_to": 595,
//   "duration_back": 739,
//   "link": "/search/BER2405NYC02061?t=AY16849194001684965900000775BERLHRJFK16857117601685810100001639JFKLHRHELBER_1f88732de5cc758c57b1dfe5bbfaabad_41535&search_date=18052023&expected_price_uuid=82e638a0-9383-4b9b-9710-eba0ee08c862&expected_price_source=share&expected_price_currency=rub&expected_price=41073"
// }
