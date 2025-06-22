import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciasGestionComponent } from './provincias-gestion.component';

describe('ProvinciasGestionComponent', () => {
  let component: ProvinciasGestionComponent;
  let fixture: ComponentFixture<ProvinciasGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinciasGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciasGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
