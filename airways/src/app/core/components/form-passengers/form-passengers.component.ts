import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface IPassengers {
  name: string;
  desc: string;
  value: number;
}

@Component({
  selector: 'app-form-passengers',
  templateUrl: './form-passengers.component.html',
  styleUrls: ['./form-passengers.component.scss']
})
export class FormPassengersComponent {

  passengers: IPassengers[] = [{
    name: 'Adults',
    desc: '14+ years',
    value: 0
  },
  {
    name: 'Child',
    desc: '2-14 years',
    value: 0
  },
  {
    name: 'Infant',
    desc: '0-2 years',
    value: 0
  }]

  @Input() parentForm: FormGroup;
  passengersForm: FormGroup;
  optionPassenger: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.updatePassengers();
  }

  ngOnInit(): void {
    this.parentForm.addControl('passengers', this.passengersForm);
  }

  private createForm() {
    this.passengersForm = this.fb.group({
      value: [this.passengers],
    });
  }

  private updatePassengers() {
    this.optionPassenger = `${this.passengers[0].value} Adult, ${this.passengers[1].value} Child, ${this.passengers[2].value} Infant`;
  }

  clickPlus(event: Event, name: string) {
    event.stopPropagation();
    this.passengers.map(item => {
      if (item.name === name) {
        item.value += 1;
      }
    })
    this.updatePassengers();
  }

  clickMinus(event: Event, name: string) {
    event.stopPropagation();
    this.passengers.map(item => {
      if (item.name === name) {
        item.value -= 1;
        if (item.value < 0) {
          item.value = 0;
        }
      }
    })
    this.updatePassengers();
  }


}



