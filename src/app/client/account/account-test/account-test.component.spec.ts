import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTestComponent } from './account-test.component';

describe('AccountTestComponent', () => {
  let component: AccountTestComponent;
  let fixture: ComponentFixture<AccountTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
