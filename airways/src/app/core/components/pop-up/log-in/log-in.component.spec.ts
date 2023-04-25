import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:airways/src/app/core/components/form-location/form-location.component.spec.ts
import { FormLocationComponent } from './form-location.component';

describe('FormLocationComponent', () => {
  let component: FormLocationComponent;
  let fixture: ComponentFixture<FormLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLocationComponent);
========
import { LogInComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInComponent);
>>>>>>>> development:airways/src/app/core/components/pop-up/log-in/log-in.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
