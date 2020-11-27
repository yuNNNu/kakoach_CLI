import { TestBed } from '@angular/core/testing';

import { PrincipalImagePlansService } from './principal-image-plans.service';

describe('PrincipalImagePlansService', () => {
  let service: PrincipalImagePlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalImagePlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
