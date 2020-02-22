import { TestBed } from '@angular/core/testing';

import { CinemaListDataService } from './cinema-list-data.service';

describe('CinemaListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinemaListDataService = TestBed.get(CinemaListDataService);
    expect(service).toBeTruthy();
  });
});
