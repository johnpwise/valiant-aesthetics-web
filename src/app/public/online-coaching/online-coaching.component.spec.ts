import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCoachingComponent } from './online-coaching.component';

describe('OnlineCoachingComponent', () => {
  let component: OnlineCoachingComponent;
  let fixture: ComponentFixture<OnlineCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
