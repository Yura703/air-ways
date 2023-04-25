import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponentComponent } from '../auth/components/login-component/login-component.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,]
})
export class CoreModule { }
