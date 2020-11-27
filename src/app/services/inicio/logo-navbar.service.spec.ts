import { TestBed } from '@angular/core/testing';

import { LogoNavbarService } from './logo-navbar.service';

describe('LogoNavbarService', () => {
  let service: LogoNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
