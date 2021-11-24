import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMyAccountComponent } from './side-nav-my-account.component';

describe('SideNavMyAccountComponent', () => {
  let component: SideNavMyAccountComponent;
  let fixture: ComponentFixture<SideNavMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
