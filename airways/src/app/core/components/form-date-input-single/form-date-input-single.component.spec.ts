import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateInputSingleComponent } from './form-date-input-single.component';

describe('FormDateInputSingleComponent', () => {
  let component: FormDateInputSingleComponent;
  let fixture: ComponentFixture<FormDateInputSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDateInputSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDateInputSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
