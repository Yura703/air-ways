import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  strongPasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasSpecialCharacters = /[!@#?]/.test(value);

    if (!value) {
      return null;
    }
    if (
      value &&
      value.length >= 8 &&
      hasNumber &&
      hasUppercase &&
      hasLowercase &&
      hasSpecialCharacters
    ) {
      return null;
    }
    return { strongPassword: true };
  }

  futureDateValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = control.value;

    if (selectedDate instanceof Date && selectedDate < currentDate) {
      return { pastDate: true };
    }

    return null;
  }
}
