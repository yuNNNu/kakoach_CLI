import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComenzamosComponent } from './comenzamos.component';

describe('ComenzamosComponent', () => {
  let component: ComenzamosComponent;
  let fixture: ComponentFixture<ComenzamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComenzamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComenzamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
