import { NgModule } from '@angular/core';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SelectMoneyFormatComponent } from './components/select-money-format/select-money-format.component';
import { SelectDateFormatComponent } from './components/select-date-format/select-date-format.component';
import { FormLocationComponent } from './components/form-location/form-location.component';
import { FormPassengersComponent } from './components/form-passengers/form-passengers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSearchFlightComponent } from './components/form-search-flight/form-search-flight.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SelectDateFormatComponent,
    SelectMoneyFormatComponent,
    FormLocationComponent,
    FormPassengersComponent,
    FormSearchFlightComponent
  ],
  imports: [
    MatCommonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    CommonModule,
  ],
  exports: [
    SelectDateFormatComponent,
    SelectMoneyFormatComponent,
    FormSearchFlightComponent],
  providers: [
    MatDatepickerModule,
    [{
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'red' },
    }],
  ]
})
export class MaterialModule { }
