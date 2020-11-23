import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRecuperarPwComponent } from './body-recuperar-pw.component';

describe('BodyRecuperarPwComponent', () => {
  let component: BodyRecuperarPwComponent;
  let fixture: ComponentFixture<BodyRecuperarPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyRecuperarPwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRecuperarPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
