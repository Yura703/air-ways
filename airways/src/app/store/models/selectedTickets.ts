import { IFlightData } from "./responseApiFlightModel";

export interface ISelectedTickets {
  to?: IFlightData,
  from?: IFlightData,
}
