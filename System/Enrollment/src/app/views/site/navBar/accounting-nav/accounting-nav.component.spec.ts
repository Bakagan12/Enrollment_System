import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingNavComponent } from './accounting-nav.component';

describe('AccountingNavComponent', () => {
  let component: AccountingNavComponent;
  let fixture: ComponentFixture<AccountingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
