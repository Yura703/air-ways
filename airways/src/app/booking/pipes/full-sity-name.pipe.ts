import { Pipe, PipeTransform } from '@angular/core';
import { map, of } from 'rxjs';
import { AutocompleteHttpService } from 'src/app/services/autocomplete-http.service';

@Pipe({
  name: 'fullSityName',
})
export default class FullSityNamePipe implements PipeTransform {
  constructor(private autoCompleteHttpService: AutocompleteHttpService) {}
  transform(abbr: string | undefined) {
    if (!abbr) return of(abbr);
    console.log(abbr);
    return this.autoCompleteHttpService
      .getAirport(abbr)
      .pipe(map((airport) => airport[0].name));
  }
}
