import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosReporteComponent } from './colectivos-reporte.component';

describe('ColectivosReporteComponent', () => {
  let component: ColectivosReporteComponent;
  let fixture: ComponentFixture<ColectivosReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectivosReporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectivosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
