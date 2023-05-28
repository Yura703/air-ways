import { TestBed } from '@angular/core/testing';

import { ApiCurrateService } from './api-currate.service';

describe('ApiCurrateService', () => {
  let service: ApiCurrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCurrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
