import { TestBed } from '@angular/core/testing';

import { TerminosycondicionesService } from './terminosycondiciones.service';

describe('TerminosycondicionesService', () => {
  let service: TerminosycondicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminosycondicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
