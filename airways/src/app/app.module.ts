import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignUpComponent } from './components/pop-up/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { PhoneCodeCountryComponent } from './components/inputs/phone-code-country/phone-code-country.component';
import { CitizenshipComponent } from './components/inputs/citizenship/citizenship.component';
import { LogInComponent } from './components/pop-up/log-in/log-in.component';
import { PopUpComponent } from './components/pop-up/pop-up/pop-up.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, PhoneCodeCountryComponent, CitizenshipComponent, LogInComponent, PopUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
