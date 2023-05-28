import { TestBed } from '@angular/core/testing';

import { TravelpayoutsService } from './travelpayouts.service';

describe('TravelpayoutsService', () => {
  let service: TravelpayoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelpayoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
