import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemEditComponent } from './basket-item-edit.component';

describe('BasketItemEditComponent', () => {
  let component: BasketItemEditComponent;
  let fixture: ComponentFixture<BasketItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
