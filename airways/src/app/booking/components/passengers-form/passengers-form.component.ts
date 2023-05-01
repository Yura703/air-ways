import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISearchData } from 'src/app/shared/models/models';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-passengers-form',
  templateUrl: './passengers-form.component.html',
  styleUrls: ['./passengers-form.component.scss']
})
export class PassengersFormComponent implements OnInit, OnDestroy {
  @Input() passengers: ISearchData["passengers"];

  passengersForm: FormGroup;

  optionPassenger: string;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {}

  ngOnInit(): void {
    this.passengersForm = this.fb.group({
      value: [this.passengers],
    });

    this.updatePassengers();
  }

  ngOnDestroy(): void {
    this.bookingService.editSearchData({
      passengers: this.passengers,
    })
  }

  private updatePassengers() {
    this.optionPassenger = `${this.passengers.adult} Adult, ${this.passengers.child} Child, ${this.passengers.infant} Infant`;
  }

  clickPlus(event: Event, name: string) {
    event.stopPropagation();
    let count = Number(this.passengers[name as keyof ISearchData["passengers"]]);
    this.passengers = {
      ...this.passengers,
      [name]: count += 1,
    }
    this.updatePassengers();
  }

  clickMinus(event: Event, name: string) {
    event.stopPropagation();
    let count = Number(this.passengers[name as keyof ISearchData["passengers"]]);
    if (count) {
      this.passengers = {
        ...this.passengers,
        [name]: count -= 1,
      }
      this.updatePassengers();
    }
  }

}
