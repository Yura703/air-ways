import { TestBed } from '@angular/core/testing';

import { AutocompleteHttpService } from './autocomplete-http.service';

describe('AutocompleteHttpService', () => {
  let service: AutocompleteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
