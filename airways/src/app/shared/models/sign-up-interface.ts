export interface SignUpInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: PhoneNumber;
  citizenship: string;
  datepicker: Date;
  gender: string;
  password: string;
  termsAndConditions: boolean;
}

export interface PhoneNumber {
  name: string;
  dial_code: string;
  code: string;
}
