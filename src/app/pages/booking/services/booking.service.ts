import { Injectable } from '@angular/core';
import { BookingDataService } from './booking-data.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IStateBooking, BookingAction } from '../models/booking.model';
import { IDate } from 'src/app/shared/models/date.model';

@Injectable()
export class BookingService {

  private _state = new BehaviorSubject<IStateBooking>({});

  private set state(state: IStateBooking) {
    this._state.next(state);
  }

  private get state() {
    return this._state.getValue();
  }

  state$ = this._state.asObservable();

  constructor(private bookingDataService: BookingDataService) { }

  getSessions(cinemaId: number) {
    return this.bookingDataService.getSeatByDate(cinemaId).pipe(tap(res => {
      this.state = {
        action: BookingAction.loadData,
        payload: { sessions: res, seatIds: [] }
      }
    }))
  }

  changeDate(date: IDate) {
    // @TODO use filter for view list session on eq time
    let current = this.state.payload.sessions.find(sesson => this.getTimestamp(sesson.date) === this.getTimestamp(date));
    this.state = {
      action: BookingAction.changeDate,
      payload: {
        current: current,
        seatIds: [],
        sessions: this.state.payload.sessions
      }
    }
  }

  toggleSeat(seatId: number) {
    let oldPayload = this.state.payload;
    let seatIds = oldPayload.seatIds.includes(seatId) ? oldPayload.seatIds.filter(_d => _d !== seatId): [seatId, ...oldPayload.seatIds];
    
    this.state = {
      action: BookingAction.changeSeat,
      payload: {
        sessions: this.state.payload.sessions,
        current: this.state.payload.current,
        seatIds: seatIds
      }
    }
  }

  getTimestamp(date: IDate) {
    return 'timestamp_' + date.day + date.hour + date.minute + date.month + date.year;
  }



}
