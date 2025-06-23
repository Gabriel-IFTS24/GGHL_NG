import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasAltaComponent } from './rutas-alta.component';

describe('RutasAltaComponent', () => {
  let component: RutasAltaComponent;
  let fixture: ComponentFixture<RutasAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
