import { TestBed } from '@angular/core/testing';

import { PhoneCodeNameService } from './phone-code-name.service';

describe('PhoneCodeNameService', () => {
  let service: PhoneCodeNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneCodeNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
