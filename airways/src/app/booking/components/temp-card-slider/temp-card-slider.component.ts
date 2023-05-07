// import { Component } from '@angular/core';
// import { Plugin } from "@egjs/ngx-flicking";
// import { Arrow } from "@egjs/flicking-plugins";

// @Component({
//   selector: 'app-temp-card-slider',
//   templateUrl: './temp-card-slider.component.html',
//   styleUrls: ['./temp-card-slider.component.scss',  "../../../../../node_modules/@egjs/flicking-plugins/dist/arrow.css"]
// })
// export class TempCardSliderComponent {
//   @Input() idFlight: number;

//   @Output() idFlightChange = new EventEmitter<number>();

//   private ngUnsubscribe = new Subject<void>();

//   public plugins: Plugin[] = [new Arrow()];

//   public dateFlight$: Observable<IDateApi[]>;

//   constructor(public bookingService: BookingService, public store: Store<IAppStore>) {}
//   ngOnInit(): void {
//     this.dateFlight$ = this.store.pipe(select(selectAllFlight));

//     // this.dateFlight$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
//     //   (dateFlight) => this.dateFlight = dateFlight
//     // );
//     // console.log(this.dateFlight);

//   }
//   ngOnDestroy(): void {
//     this.ngUnsubscribe.next();
//     this.ngUnsubscribe.complete();
//   }

//   public ticketInfo = {
//     from: 'Dooblin',
//     to: "Warsaw Modlin",
//     dateFrom: '1Mar',
//     dateTo: '18Mar',
//     person: '3',
//   }

//   public currentDate = new Date();
//   public currency = "€";
//   public cost = 146.7777777;

//   //this.passengerDataChange.emit({ ...form.value } as IPassengerData)
// }
