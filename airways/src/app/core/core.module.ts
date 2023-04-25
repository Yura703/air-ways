import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { FormSearchFlightComponent } from './components/form-search-flight/form-search-flight.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    FormSearchFlightComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
