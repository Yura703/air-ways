import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPassengersComponent } from './form-passengers.component';

describe('FormPassengersComponent', () => {
  let component: FormPassengersComponent;
  let fixture: ComponentFixture<FormPassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPassengersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
