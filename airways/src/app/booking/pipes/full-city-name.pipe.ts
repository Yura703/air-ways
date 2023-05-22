import { Pipe, PipeTransform } from '@angular/core';
import { map, of } from 'rxjs';
import { AutocompleteHttpService } from 'src/app/services/autocomplete-http.service';

@Pipe({
  name: 'fullCityName',
})
export class FullCityNamePipe implements PipeTransform {
  constructor(private autoCompleteHttpService: AutocompleteHttpService) {}
  transform(abbr: string | undefined) {
    if (!abbr) return of(abbr);
    return this.autoCompleteHttpService
      .getAirport(abbr)
      .pipe(map((airport) => airport[0].name));
  }
}
