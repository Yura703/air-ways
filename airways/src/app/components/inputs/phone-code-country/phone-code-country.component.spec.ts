import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCodeCountryComponent } from './phone-code-country.component';

describe('PhoneCodeCountryComponent', () => {
  let component: PhoneCodeCountryComponent;
  let fixture: ComponentFixture<PhoneCodeCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCodeCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneCodeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
