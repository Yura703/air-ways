import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignUpInterface } from '../../shared/models/sign-up-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthUserDataService {
  public authUserDataIn = new BehaviorSubject<SignUpInterface | string>('');
  public authUserDataUp = new BehaviorSubject<SignUpInterface | string>('');
}
