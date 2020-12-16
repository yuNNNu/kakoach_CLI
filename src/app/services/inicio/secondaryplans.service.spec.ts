import { TestBed } from '@angular/core/testing';

import { SecondaryplansService } from './secondaryplans.service';

describe('SecondaryplansService', () => {
  let service: SecondaryplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
