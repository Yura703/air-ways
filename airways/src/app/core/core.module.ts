import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormatMoneyPipe } from '../shared/pipes/formatMoney.pipe';
import { BasketItemEditComponent } from './components/basket-item-edit/basket-item-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormDateInputDoubleComponent } from './components/form-date-input-double/form-date-input-double.component';
import { FormDateInputSingleComponent } from './components/form-date-input-single/form-date-input-single.component';
import { FormLocationComponent } from './components/form-location/form-location.component';
import { FormPassengersComponent } from './components/form-passengers/form-passengers.component';
import { FormSearchFlightComponent } from './components/form-search-flight/form-search-flight.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemCartFlightComponent } from './components/item-cart-flight/item-cart-flight.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CitizenshipComponent } from './components/pop-up/inputs/citizenship/citizenship.component';
import { PhoneCodeCountryComponent } from './components/pop-up/inputs/phone-code-country/phone-code-country.component';
import { LogInComponent } from './components/pop-up/log-in/log-in.component';
import { PopUpComponent } from './components/pop-up/pop-up/pop-up.component';
import { SignUpComponent } from './components/pop-up/sign-up/sign-up.component';
import { SelectDateFormatComponent } from './components/select-date-format/select-date-format.component';
import { SelectMoneyFormatComponent } from './components/select-money-format/select-money-format.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

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
    ItemCartFlightComponent,
    BasketItemEditComponent,
    FormDateInputSingleComponent,
    FormDateInputDoubleComponent,
    FormatMoneyPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleSigninButtonModule,
    RouterLink,
  ],
  providers: [
    MatDatepickerModule,
    [
      {
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: { color: 'red' },
      },
    ],
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '17910685292-qusiccs0u48hgtqpmvq0ksnii6llf2io.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormatMoneyPipe,
    PhoneCodeCountryComponent,
    ItemCartFlightComponent,
    FormsModule,
  ],
})
export class CoreModule {}
