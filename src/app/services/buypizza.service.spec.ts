import { TestBed } from '@angular/core/testing';

import { BuypizzaService } from './buypizza.service';

describe('BuypizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuypizzaService = TestBed.get(BuypizzaService);
    expect(service).toBeTruthy();
  });
});
