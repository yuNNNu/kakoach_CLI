import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanfilterComponent } from './planfilter.component';

describe('PlanfilterComponent', () => {
  let component: PlanfilterComponent;
  let fixture: ComponentFixture<PlanfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
