import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraIVAComponent } from './calculadora-iva.component';

describe('CalculadoraIVAComponent', () => {
  let component: CalculadoraIVAComponent;
  let fixture: ComponentFixture<CalculadoraIVAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraIVAComponent]
    });
    fixture = TestBed.createComponent(CalculadoraIVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
