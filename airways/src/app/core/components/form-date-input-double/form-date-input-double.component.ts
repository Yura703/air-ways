import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-form-date-input-double',
  templateUrl: './form-date-input-double.component.html',
  styleUrls: ['./form-date-input-double.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDateInputDoubleComponent implements OnInit {
  @Input() parentForm: FormGroup;
  dateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.parentForm.addControl('date', this.dateForm);
  }

  private createForm() {
    this.dateForm = this.fb.group({
      startDate: [
        '',
        [Validators.required, this.formValidationService.futureDateValidator],
      ],
      returnDate: [
        '',
        [Validators.required, this.formValidationService.futureDateValidator],
      ],
    });
  }

  get _startDate() {
    return this.dateForm.get('startDate');
  }

  get _returnDate() {
    return this.dateForm.get('returnDate');
  }
}
