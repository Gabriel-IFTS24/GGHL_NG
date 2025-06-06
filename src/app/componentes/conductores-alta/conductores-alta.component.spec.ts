import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresAltaComponent } from './conductores-alta.component';

describe('ConductoresAltaComponent', () => {
  let component: ConductoresAltaComponent;
  let fixture: ComponentFixture<ConductoresAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductoresAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductoresAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
