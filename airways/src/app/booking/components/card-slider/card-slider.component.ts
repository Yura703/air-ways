import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IDateApi } from 'src/app/store/models/responseApiFlightModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectAllFlight } from 'src/app/store/selectors/selectors';
import BookingService from '../../service/booking.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})

export class CardSliderComponent implements OnInit {
  @Input() idFlight: number;

  @Input() direction: boolean;

  @Output() idFlightChange = new EventEmitter<number>();

  public dateFlight$: Observable<IDateApi[]>;

  public previousDay = new Date();
  public futureDay = new Date();

  public idFlightStart = 0;
  public idFlightEnd = 3;

  constructor(public bookingService: BookingService, public store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.dateFlight$ = this.bookingService.getFlightDate(this.direction);
  }

  moveSlider(direction: string): void {
    if (direction === 'left' && this.idFlight) {
      this. idFlightChange.emit(this.idFlight -= 1);
    } else if (direction === 'right' && this.idFlight < 9) {
      this. idFlightChange.emit(this.idFlight += 1);
    }

    if (this.idFlight < 3) this.idFlightStart = 0;
    else this.idFlightStart = this.idFlight - 2;

    if (this.idFlight < 7) this.idFlightEnd = this.idFlight + 3;
    else this.idFlightEnd = 10;
  }
}
