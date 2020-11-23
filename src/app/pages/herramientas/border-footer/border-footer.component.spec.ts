import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderFooterComponent } from './border-footer.component';

describe('BorderFooterComponent', () => {
  let component: BorderFooterComponent;
  let fixture: ComponentFixture<BorderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
