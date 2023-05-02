import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormProcessingService } from '../../services/form-processing.service';
import { ILocationForm } from '../form-location/form-location.component';


@Component({
  selector: 'app-form-search-flight',
  templateUrl: './form-search-flight.component.html',
  styleUrls: ['./form-search-flight.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  isReverse: boolean;

  constructor(private fb: FormBuilder, private formProcessingService: FormProcessingService) {
    this.createForm();
  }

  private createForm() {
    this.searchForm = this.fb.group({
      type: ['Round', []],
    });
  }

  changeType() {
    this.tripOption === 'Round' ? this.tripOption = 'One' : this.tripOption = 'Round';
    this.searchForm.removeControl('date');
  }

  reverseClick() {
    [this.locationForms[0].namelabel, this.locationForms[1].namelabel] = [this.locationForms[1].namelabel, this.locationForms[0].namelabel];
    this.locationForms.reverse();
    this.isReverse ? this.isReverse = false : this.isReverse = true;
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched()
      return;
    }
    this.formProcessingService.processingForm(this.searchForm.value, this.isReverse);
  }

}
