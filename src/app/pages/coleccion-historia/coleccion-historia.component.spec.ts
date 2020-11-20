import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionHistoriaComponent } from './coleccion-historia.component';

describe('ColeccionHistoriaComponent', () => {
  let component: ColeccionHistoriaComponent;
  let fixture: ComponentFixture<ColeccionHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeccionHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
