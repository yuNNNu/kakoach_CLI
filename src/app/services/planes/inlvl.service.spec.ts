import { TestBed } from '@angular/core/testing';

import { InlvlService } from './inlvl.service';

describe('InlvlService', () => {
  let service: InlvlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InlvlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
