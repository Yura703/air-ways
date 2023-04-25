import { Component, EventEmitter, Output } from '@angular/core';
import { PhoneCodeCountry } from '../../../../../constants/phone-code-country';
import { PhoneCodeCountryInterface } from '../../../../../interfaces/phone-code-country.interface';

@Component({
  selector: 'app-phone-code-country',
  templateUrl: './phone-code-country.component.html',
  styleUrls: ['./phone-code-country.component.scss'],
})
export class PhoneCodeCountryComponent {
  @Output() phoneCodeCountryChange = new EventEmitter<string>();
  // myControl = new FormControl('');
  selectedOption = '';

  optionsName: PhoneCodeCountryInterface[] = PhoneCodeCountry;

  // filteredOptions: Observable<string[]> | undefined;
  // constructor(private phoneCodeNameService: PhoneCodeNameService) {}

  // ngOnInit() {
  // this.phoneCodeNameService.createArrayPhoneCodeName().subscribe((value) => {
  //   value.forEach((el) => {
  //     this.optionsName.push(`${el.name}    ${el.dial_code}`);
  //   });
  // });
  //   this.phoneCodeNameService.createArrayPhoneCodeName().subscribe((value) => {
  //     value.forEach((el) => {
  //       this.optionsName.push(`${el.name}    ${el.dial_code}`);
  //     });
  //   });
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map((value) => this._filter(value || ''))
  //   );
  // }
  //
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.optionsName.filter((option) =>
  //     option.toLowerCase().includes(filterValue)
  //   );
  // }
}
