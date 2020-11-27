import { TestBed } from '@angular/core/testing';

import { FirstimageService } from './firstimage.service';

describe('FirstimageService', () => {
  let service: FirstimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
