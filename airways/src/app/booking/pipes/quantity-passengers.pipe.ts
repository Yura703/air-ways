import { Pipe, PipeTransform } from '@angular/core';
import { ISearchData } from 'src/app/shared/models/models';
@Pipe({
  name: 'quantityPassengers',
})
export default class QuantityPassengersPipe implements PipeTransform {
  transform(passengers: ISearchData["passengers"]) {

    return +passengers.adult + +passengers.child + +passengers.infant;
  }
}
