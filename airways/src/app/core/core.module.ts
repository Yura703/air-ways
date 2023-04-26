import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { FormLocationComponent } from './components/form-location/form-location.component';
import { FormPassengersComponent } from './components/form-passengers/form-passengers.component';
import { FormSearchFlightComponent } from './components/form-search-flight/form-search-flight.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CitizenshipComponent } from './components/pop-up/inputs/citizenship/citizenship.component';
import { PhoneCodeCountryComponent } from './components/pop-up/inputs/phone-code-country/phone-code-country.component';
import { LogInComponent } from './components/pop-up/log-in/log-in.component';
import { PopUpComponent } from './components/pop-up/pop-up/pop-up.component';
import { SignUpComponent } from './components/pop-up/sign-up/sign-up.component';
import { SelectDateFormatComponent } from './components/select-date-format/select-date-format.component';
import { SelectMoneyFormatComponent } from './components/select-money-format/select-money-format.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponentComponent,
    FormLocationComponent,
    FormSearchFlightComponent,
    SelectDateFormatComponent,
    SelectMoneyFormatComponent,
    LoginComponentComponent,
    FormSearchFlightComponent,
    SignUpComponent,
    PhoneCodeCountryComponent,
    CitizenshipComponent,
    LogInComponent,
    PopUpComponent,
    FormPassengersComponent,
    SelectDateFormatComponent,
    SelectMoneyFormatComponent,
    MainPageComponent,
    BasketPageComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  providers: [
    MatDatepickerModule,
    [
      {
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: { color: 'red' },
      },
    ],
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
