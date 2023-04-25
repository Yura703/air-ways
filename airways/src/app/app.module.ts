import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SelectDateFormatComponent } from './core/components/select-date-format/select-date-format.component';
import { CoreModule } from './core/core.module';
import { MatSelectModule } from '@angular/material/select';
import { SelectMoneyFormatComponent } from './core/components/select-money-format/select-money-format.component';
import { LoginComponentComponent } from './auth/components/login-component/login-component.component';
import { FormSearchFlightComponent } from './mainPage/components/form-search-flight/form-search-flight.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MainPageComponent } from './mainPage/pages/main-page/main-page.component';
import { FooterComponent } from './core/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectDateFormatComponent,
    SelectMoneyFormatComponent,
    LoginComponentComponent,
    FormSearchFlightComponent,
    MainPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [
    MatDatepickerModule,
    [{
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'red' },
    }]
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
