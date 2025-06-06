import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresDetalleComponent } from './conductores-detalle.component';

describe('ConductoresDetalleComponent', () => {
  let component: ConductoresDetalleComponent;
  let fixture: ComponentFixture<ConductoresDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductoresDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductoresDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
