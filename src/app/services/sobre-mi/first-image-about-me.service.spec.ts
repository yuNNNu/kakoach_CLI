import { TestBed } from '@angular/core/testing';

import { FirstImageAboutMeService } from './first-image-about-me.service';

describe('FirstImageAboutMeService', () => {
  let service: FirstImageAboutMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstImageAboutMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
