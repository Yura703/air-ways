import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerDataInterface } from '../../shared/models/server-data.inerface';
import { UserInterface } from '../../shared/models/server-user.interface';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private apiUrl = 'https://auth-new.herokuapp.com';
  userId = 1;

  constructor(private http: HttpClient) {}

  // Функция для отправки данных о пользователе на сервер

  createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    const body = { email, password, firstName, lastName };
    // console.log(body);
    return this.http.post(`${this.apiUrl}/signup`, body);
  }

  // Функция для регистрации пользователя, если логин и пароль совпадают с данными на сервере

  logIn(email: string, password: string): Observable<ServerDataInterface> {
    const body = { email, password };
    // console.log(body);
    return this.http.post<ServerDataInterface>(`${this.apiUrl}/signin`, body);
  }

  // Длинна массва

  lengthUsersArray(): Observable<UserInterface[]> {
    const url = `${this.apiUrl}/users`;
    const users = this.http.get(url);
    console.log(users);
    return this.http.get<UserInterface[]>(url);
  }

  // Функция удаления всех юзеров

  removeUser(id: number) {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.delete(url);
  }
}
