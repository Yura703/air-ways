import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-date-input-double',
  templateUrl: './form-date-input-double.component.html',
  styleUrls: ['./form-date-input-double.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDateInputDoubleComponent {


  @Input() parentForm: FormGroup;
  dateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.parentForm.addControl('date', this.dateForm);
  }

  private createForm() {
    this.dateForm = this.fb.group({
      startDate: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
    });
  }

  get _startDate() {
    return this.dateForm.get('startDate');
  }

  get _returnDate() {
    return this.dateForm.get('returnDate');
  }

}