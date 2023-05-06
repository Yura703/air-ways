class ErrorMessage {
  constructor(public forControl: string, public forValidator: string, public text: string) {}
}

const FormErrorMessage = [
  new ErrorMessage('firstName', 'required', 'Please enter a First Name'),
  new ErrorMessage('firstName', 'minlength', 'The  First Name is too short'),
  new ErrorMessage('firstName', 'pattern', 'The  First Name must contain letters'),
  new ErrorMessage('lastName', 'required', 'Please enter a Last Name'),
  new ErrorMessage('lastName', 'minlength', 'The  Last Name is too short'),
  new ErrorMessage('lastName', 'pattern', 'The  Last Name must contain letters'),
  new ErrorMessage('gender', 'required', 'Please enter a gender'),
  new ErrorMessage('datepicker', 'required', 'Please enter a date'),
  new ErrorMessage('datepicker', 'max', 'Please enter a date from the past'),
];

export  {
  FormErrorMessage,
  ErrorMessage
}
