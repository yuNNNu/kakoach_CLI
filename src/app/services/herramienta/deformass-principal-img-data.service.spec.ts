import { TestBed } from '@angular/core/testing';

import { DeformassPrincipalImgDataService } from './deformass-principal-img-data.service';

describe('DeformassPrincipalImgDataService', () => {
  let service: DeformassPrincipalImgDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeformassPrincipalImgDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
