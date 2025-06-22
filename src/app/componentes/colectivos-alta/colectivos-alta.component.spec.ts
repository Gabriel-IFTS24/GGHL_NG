import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosAltaComponent } from './colectivos-alta.component';

describe('ColectivosAltaComponent', () => {
  let component: ColectivosAltaComponent;
  let fixture: ComponentFixture<ColectivosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectivosAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectivosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
