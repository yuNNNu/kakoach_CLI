import { TestBed } from '@angular/core/testing';

import { DatalevelsService } from './datalevels.service';

describe('DatalevelsService', () => {
  let service: DatalevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatalevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
