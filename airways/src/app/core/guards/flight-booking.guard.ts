import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthUserDataService } from '../services/auth-user-data.service';
import { FormProcessingService } from '../services/form-processing.service';

@Injectable({
  providedIn: 'root',
})
export class FlightBookingGuard implements CanActivate {
  constructor(
    private userService: AuthUserDataService,
    private router: Router,
    private formProcessingService: FormProcessingService
  ) {}

  canActivate(): boolean | UrlTree {
    return this.doesUserExist();
  }

  private doesUserExist(): boolean | UrlTree {
    const isData = this.formProcessingService.isData.getValue();

    if (isData) {
      return true; // Разрешаем переход на страницу '/flight-booking'
    } else {
      this.router.navigate(['']); // Перенаправляем на главную страницу'
      return false; // Запрещаем переход на страницу '/flight-booking'
    }
  }
}
