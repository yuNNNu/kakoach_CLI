import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapassComponent } from './nuevapass.component';

describe('NuevapassComponent', () => {
  let component: NuevapassComponent;
  let fixture: ComponentFixture<NuevapassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevapassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevapassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
