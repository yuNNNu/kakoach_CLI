import { TestBed } from '@angular/core/testing';

import { PersnalPlanService } from './persnal-plan.service';

describe('PersnalPlanService', () => {
  let service: PersnalPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersnalPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
