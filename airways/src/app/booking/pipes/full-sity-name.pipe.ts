import { Pipe, PipeTransform } from '@angular/core';
import { map, of } from 'rxjs';
import { AutocompleteHttpService } from 'src/app/services/autocomplete-http.service';
import { ISearchData } from 'src/app/shared/models/models';
import { IPassengers } from 'src/app/store/models/searchMainModel';
@Pipe({
  name: 'fullSityName',
})
export default class FullSityNamePipe implements PipeTransform {
  constructor(private autoCompleteHttpService: AutocompleteHttpService) {}
  transform(abbr: string | undefined) {
    if(!abbr) return of(abbr)
    return this.autoCompleteHttpService.getAirport(abbr).pipe(map(airport => airport[0].name));
  }
}
