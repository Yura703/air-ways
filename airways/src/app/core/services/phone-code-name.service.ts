import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhoneCodeCountry } from '../../constants/phone-code-country';
import { PhoneCodeCountryInterface } from '../../shared/models/phone-code-country.interface';

@Injectable({
  providedIn: 'root',
})
export class PhoneCodeNameService {
  createArrayPhoneCodeName(): Observable<PhoneCodeCountryInterface[]> {
    return of(PhoneCodeCountry);
  }
}
