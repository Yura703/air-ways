import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateFormatComponent } from './select-date-format.component';

describe('SelectDateFormatComponent', () => {
  let component: SelectDateFormatComponent;
  let fixture: ComponentFixture<SelectDateFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDateFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDateFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
