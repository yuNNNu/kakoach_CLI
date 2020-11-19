import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalimageComponent } from './principalimage.component';

describe('PrincipalimageComponent', () => {
  let component: PrincipalimageComponent;
  let fixture: ComponentFixture<PrincipalimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
