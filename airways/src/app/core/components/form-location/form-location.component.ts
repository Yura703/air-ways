import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  Subscription,
} from 'rxjs';
import { IAirportResponse } from '../../../shared/models/autocompleteModel';
import { AutocompleteHttpService } from '../../services/autocomplete-http.service';

export interface ILocationForm {
  nameForm: string;
  namelabel: string;
}

@Component({
  selector: 'app-form-location',
  templateUrl: './form-location.component.html',
  styleUrls: ['./form-location.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormLocationComponent implements OnInit, OnDestroy {
  @Input() optionForm: ILocationForm;
  @Input() parentForm: FormGroup;

  locationForm: FormGroup;
  locationOptions: Observable<IAirportResponse[]>;
  subscription$: Subscription;

  constructor(
    private fb: FormBuilder,
    private autoCompleteHttpService: AutocompleteHttpService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.parentForm.addControl(this.optionForm.nameForm, this.locationForm);

    const input$ = this.locationForm.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged()
    );

    this.subscription$ = input$.subscribe((value) => {
      if (value) {
        this.locationOptions = this.autoCompleteHttpService.getAirport(
          value.location
        );
      }
    });
  }

  private createForm() {
    this.locationForm = this.fb.group({
      location: ['', [Validators.required]],
    });
  }

  get _location() {
    return this.locationForm.get('location');
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
