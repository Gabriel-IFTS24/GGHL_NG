import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresReportesComponent } from './conductores-reportes.component';

describe('ConductoresReportesComponent', () => {
  let component: ConductoresReportesComponent;
  let fixture: ComponentFixture<ConductoresReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductoresReportesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductoresReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
