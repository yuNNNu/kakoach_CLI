import { TestBed } from '@angular/core/testing';

import { DolarvalueService } from './dolarvalue.service';

describe('DolarvalueService', () => {
  let service: DolarvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
