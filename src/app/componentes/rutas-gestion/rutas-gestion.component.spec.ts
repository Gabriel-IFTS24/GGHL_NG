import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasGestionComponent } from './rutas-gestion.component';

describe('RutasGestionComponent', () => {
  let component: RutasGestionComponent;
  let fixture: ComponentFixture<RutasGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
