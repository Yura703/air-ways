import { TestBed } from '@angular/core/testing';

import { FlightBookingGuard } from './flight-booking.guard';

describe('FlightBookingGuard', () => {
  let guard: FlightBookingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FlightBookingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
