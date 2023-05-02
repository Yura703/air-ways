import { TestBed } from '@angular/core/testing';

import { FormProcessingService } from './form-processing.service';

describe('FormProcessingService', () => {
  let service: FormProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
