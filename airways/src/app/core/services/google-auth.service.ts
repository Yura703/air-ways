import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerDataInterface } from '../../shared/models/server-data.inerface';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private apiUrl = 'https://auth-new.herokuapp.com/';

  constructor(private http: HttpClient) {}

  // Функция для отправки данных о пользователе на сервер

  createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    const body = { email, password, firstName, lastName };
    console.log(body);
    return this.http.post(`${this.apiUrl}/signup`, body);
  }

  // Функция для регистрации пользователя, если логин и пароль совпадают с данными на сервере

  logIn(email: string, password: string): Observable<ServerDataInterface> {
    const body = { email, password };
    console.log(body);
    return this.http.post<ServerDataInterface>(`${this.apiUrl}/signin`, body);
  }
}
