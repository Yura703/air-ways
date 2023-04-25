import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMoneyFormatComponent } from './select-money-format.component';

describe('SelectMoneyFormatComponent', () => {
  let component: SelectMoneyFormatComponent;
  let fixture: ComponentFixture<SelectMoneyFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMoneyFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMoneyFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
