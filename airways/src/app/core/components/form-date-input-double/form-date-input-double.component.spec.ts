import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateInputDoubleComponent } from './form-date-input-double.component';

describe('FormDateInputDoubleComponent', () => {
  let component: FormDateInputDoubleComponent;
  let fixture: ComponentFixture<FormDateInputDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDateInputDoubleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDateInputDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
