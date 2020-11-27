import { TestBed } from '@angular/core/testing';

import { CardsAboutMeService } from './cards-about-me.service';

describe('CardsAboutMeService', () => {
  let service: CardsAboutMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsAboutMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
