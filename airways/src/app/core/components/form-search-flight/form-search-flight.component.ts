import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProcessingService } from '../../services/form-processing.service';
import { ILocationForm } from '../form-location/form-location.component';

@Component({
  selector: 'app-form-search-flight',
  templateUrl: './form-search-flight.component.html',
  styleUrls: ['./form-search-flight.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormSearchFlightComponent {
  isData = false;

  locationForms: ILocationForm[] = [
    {
      nameForm: 'origin',
      namelabel: 'From',
    },
    {
      nameForm: 'destination',
      namelabel: 'Destination',
    },
  ];

  searchForm: FormGroup;
  tripOption: string;
  isReverse = false; //если не нажимать на кнопку реверс, то без этого значения оно будет андефайнд

  constructor(
    private fb: FormBuilder,
    private formProcessingService: FormProcessingService,
    private router: Router
  ) {
    this.createForm();
  }

  private createForm() {
    this.searchForm = this.fb.group({
      type: ['Round', []],
    });
  }

  changeType() {
    this.tripOption === 'Round'
      ? (this.tripOption = 'One')
      : (this.tripOption = 'Round');
    this.searchForm.removeControl('date');
  }

  reverseClick() {
    [this.locationForms[0].namelabel, this.locationForms[1].namelabel] = [
      this.locationForms[1].namelabel,
      this.locationForms[0].namelabel,
    ];
    this.locationForms.reverse();
    this.isReverse ? (this.isReverse = false) : (this.isReverse = true);
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }
    this.formProcessingService.processingForm(
      this.searchForm.value,
      this.isReverse
    );
    this.isData = true;
    this.formProcessingService.isData.next(this.isData);
    this.router.navigate(['flight-booking']);
  }
}
