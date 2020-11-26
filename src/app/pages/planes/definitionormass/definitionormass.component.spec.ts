import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionormassComponent } from './definitionormass.component';

describe('DefinitionormassComponent', () => {
  let component: DefinitionormassComponent;
  let fixture: ComponentFixture<DefinitionormassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionormassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionormassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
