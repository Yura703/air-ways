import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-form-date-input-single',
  templateUrl: './form-date-input-single.component.html',
  styleUrls: ['./form-date-input-single.component.scss'],
})
export class FormDateInputSingleComponent implements OnInit {
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
    });
  }

  get _startDate() {
    return this.dateForm.get('startDate');
  }
}
