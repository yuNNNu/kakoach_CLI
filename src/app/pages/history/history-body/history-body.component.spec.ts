import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBodyComponent } from './history-body.component';

describe('HistoryBodyComponent', () => {
  let component: HistoryBodyComponent;
  let fixture: ComponentFixture<HistoryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
