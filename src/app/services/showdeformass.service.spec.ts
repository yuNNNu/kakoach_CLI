import { TestBed } from '@angular/core/testing';

import { ShowdeformassService } from './showdeformass.service';

describe('ShowdeformassService', () => {
  let service: ShowdeformassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowdeformassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
