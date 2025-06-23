import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosDetalleComponent } from './colectivos-detalle.component';

describe('ColectivosDetalleComponent', () => {
  let component: ColectivosDetalleComponent;
  let fixture: ComponentFixture<ColectivosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectivosDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectivosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
