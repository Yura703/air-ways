import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnWayComponent } from './return-way.component';

describe('ReturnWayComponent', () => {
  let component: ReturnWayComponent;
  let fixture: ComponentFixture<ReturnWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
