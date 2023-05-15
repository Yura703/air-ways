export interface IResponseApi {
    currency: string;
    data: IDateApi[];
    error: string;
    success: boolean;
}

export interface IDateApi {
    actual: boolean;
    depart_date: string;
    destination: string;
    distance: number;
    duration: number;
    found_at: string;
    gate: string;
    number_of_changes: number;
    origin: string;
    return_date: string;
    show_to_affiliates: boolean;
    trip_class: number;
    value: number;
}

export interface IMissingData {
  utc: string, //'UTC +0',
  type: 'Direct' | 'Non-stop',
  tymeFly: string,//'2h 50m',
  flightNo: string,//'FR 1925',
  countSeatsAvailable: number,//'100',
  dateFlightTo: string,
}

export interface IFlightData extends IDateApi, IMissingData {}
