import { TestBed } from '@angular/core/testing';

import { VentaExitosaService } from './venta-exitosa.service';

describe('VentaExitosaService', () => {
  let service: VentaExitosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaExitosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
