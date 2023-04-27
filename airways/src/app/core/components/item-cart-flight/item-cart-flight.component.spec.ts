import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCartFlightComponent } from './item-cart-flight.component';

describe('ItemCartFlightComponent', () => {
  let component: ItemCartFlightComponent;
  let fixture: ComponentFixture<ItemCartFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCartFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCartFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
