import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICinema } from '../models/cinema-list.model';

@Injectable()
export class CinemaListDataService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<ICinema[]>(environment.urls.cinemaList);
  }
}
