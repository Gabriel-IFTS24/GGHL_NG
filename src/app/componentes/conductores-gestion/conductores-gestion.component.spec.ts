import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresGestionComponent } from './conductores-gestion.component';

describe('ConductoresGestionComponent', () => {
  let component: ConductoresGestionComponent;
  let fixture: ComponentFixture<ConductoresGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductoresGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductoresGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
