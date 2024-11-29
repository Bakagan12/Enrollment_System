import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalNavComponent } from './principal-nav.component';

describe('PrincipalNavComponent', () => {
  let component: PrincipalNavComponent;
  let fixture: ComponentFixture<PrincipalNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
