import { Pipe, PipeTransform } from '@angular/core';
import { IPassengers } from 'src/app/store/models/searchMainModel';
@Pipe({
  name: 'quantityPassengers',
})
export default class QuantityPassengersPipe implements PipeTransform {
  transform(passengers: IPassengers[] | undefined) {
    if (!passengers) return 0;
    //const passengersArray = (passengers as unknown as {value: IPassengers[]}).value;
    return passengers.reduce((acc, cv)=> acc + cv.value, 0);
  }
}
