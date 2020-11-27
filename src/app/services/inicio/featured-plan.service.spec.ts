import { TestBed } from '@angular/core/testing';

import { FeaturedPlanService } from './featured-plan.service';

describe('FeaturedPlanService', () => {
  let service: FeaturedPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
