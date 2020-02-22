import { Injectable } from '@angular/core';
import { CinemaListDataService } from './cinema-list-data.service';

@Injectable()
export class CinemaListService {

  constructor(private cinemaListDataService: CinemaListDataService) { }

  getList() {
    return this.cinemaListDataService.getList();
  }

  
}
