import { TestBed } from '@angular/core/testing';

import { DescripcionService } from './descripcion.service';

describe('DescripcionService', () => {
  let service: DescripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
