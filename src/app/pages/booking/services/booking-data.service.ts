import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { ICinemaSession } from '../models/booking.model';

@Injectable()
export class BookingDataService {

  constructor(private http: HttpClient) { }

  getSeatByDate(id: number) {
    return this.http.get<ICinemaSession[]>(environment.urls.sessionList, { params: { id: id.toString() } });
  }

  setReserved(idSession, seats: number[]) {
    alert('setReserved TODO');
    return of(true);
  }
}
