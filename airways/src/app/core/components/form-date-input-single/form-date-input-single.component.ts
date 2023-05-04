import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-date-input-single',
  templateUrl: './form-date-input-single.component.html',
  styleUrls: ['./form-date-input-single.component.scss']
})
export class FormDateInputSingleComponent {

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
    });
  }

  get _startDate() {
    return this.dateForm.get('startDate');
  }

}
