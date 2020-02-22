import { TestBed } from '@angular/core/testing';

import { CinemaListService } from './cinema-list.service';

describe('CinemaListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemaListService = TestBed.get(CinemaListService);
    expect(service).toBeTruthy();
  });
});
