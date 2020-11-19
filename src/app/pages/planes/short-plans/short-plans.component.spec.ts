import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortPlansComponent } from './short-plans.component';

describe('ShortPlansComponent', () => {
  let component: ShortPlansComponent;
  let fixture: ComponentFixture<ShortPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
