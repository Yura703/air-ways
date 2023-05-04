import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderCartComponent } from './table-header-cart.component';

describe('TableHeaderCartComponent', () => {
  let component: TableHeaderCartComponent;
  let fixture: ComponentFixture<TableHeaderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeaderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
