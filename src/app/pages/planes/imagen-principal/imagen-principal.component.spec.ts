import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPrincipalComponent } from './imagen-principal.component';

describe('ImagenPrincipalComponent', () => {
  let component: ImagenPrincipalComponent;
  let fixture: ComponentFixture<ImagenPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
