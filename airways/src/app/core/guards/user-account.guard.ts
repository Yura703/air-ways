import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthUserDataService } from '../services/auth-user-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserAccountGuard implements CanActivate {
  constructor(
    private userService: AuthUserDataService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    return this.doesUserExist();
  }

  private doesUserExist(): boolean | UrlTree {
    const isData = this.userService.logIn.getValue();

    if (isData) {
      return true; // Разрешаем переход на страницу '/auth'
    } else {
      this.router.navigate(['']); // Перенаправляем на главную страницу'
      return false; // Запрещаем переход на страницу '/auth'
    }
  }
}
