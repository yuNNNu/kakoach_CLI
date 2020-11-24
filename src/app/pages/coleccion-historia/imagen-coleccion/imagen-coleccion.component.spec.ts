import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenColeccionComponent } from './imagen-coleccion.component';

describe('ImagenColeccionComponent', () => {
  let component: ImagenColeccionComponent;
  let fixture: ComponentFixture<ImagenColeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenColeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
