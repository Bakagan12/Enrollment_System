import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNavComponent } from './registrar-nav.component';

describe('RegistrarNavComponent', () => {
  let component: RegistrarNavComponent;
  let fixture: ComponentFixture<RegistrarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
