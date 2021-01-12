import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTerminosComponent } from './body-terminos.component';

describe('BodyTerminosComponent', () => {
  let component: BodyTerminosComponent;
  let fixture: ComponentFixture<BodyTerminosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTerminosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTerminosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
