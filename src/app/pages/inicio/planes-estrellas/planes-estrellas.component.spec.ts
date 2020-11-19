import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesEstrellasComponent } from './planes-estrellas.component';

describe('PlanesEstrellasComponent', () => {
  let component: PlanesEstrellasComponent;
  let fixture: ComponentFixture<PlanesEstrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesEstrellasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesEstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
