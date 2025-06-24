import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasDetalleComponent } from './rutas-detalle.component';

describe('RutasDetalleComponent', () => {
  let component: RutasDetalleComponent;
  let fixture: ComponentFixture<RutasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
