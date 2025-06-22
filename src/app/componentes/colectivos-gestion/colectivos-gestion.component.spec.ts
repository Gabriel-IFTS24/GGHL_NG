import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosGestionComponent } from './colectivos-gestion.component';

describe('ColectivosGestionComponent', () => {
  let component: ColectivosGestionComponent;
  let fixture: ComponentFixture<ColectivosGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectivosGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectivosGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
