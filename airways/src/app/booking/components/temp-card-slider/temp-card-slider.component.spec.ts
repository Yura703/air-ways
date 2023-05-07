import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCardSliderComponent } from './temp-card-slider.component';

describe('TempCardSliderComponent', () => {
  let component: TempCardSliderComponent;
  let fixture: ComponentFixture<TempCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempCardSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
