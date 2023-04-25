import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILocationForm } from '../form-location/form-location.component';


@Component({
  selector: 'app-form-search-flight',
  templateUrl: './form-search-flight.component.html',
  styleUrls: ['./form-search-flight.component.scss'],
})

export class FormSearchFlightComponent {

  locationForms: ILocationForm[] = [
    {
      nameForm: 'origin',
      namelabel: 'From'
    },
    {
      nameForm: 'destination',
      namelabel: 'Destination'
    }
  ]

  searchForm: FormGroup;
  tripOption: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.searchForm = this.fb.group({
      type: ['Round', []],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  reverseClick() {
    [this.locationForms[0].namelabel, this.locationForms[1].namelabel] = [this.locationForms[1].namelabel, this.locationForms[0].namelabel];
    this.locationForms.reverse();
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched()
      return;
    }

    console.log(this.searchForm.value)
  }


  get _startDate() {
    return this.searchForm.get('startDate');
  }

  get _endDate() {
    return this.searchForm.get('endDate');
  }
}
