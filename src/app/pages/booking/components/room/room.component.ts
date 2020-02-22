import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Subscription } from 'rxjs';
import { ISeatBooking, ISinemaRoom } from '../../models/booking.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {

  constructor(private bookingService: BookingService) { }

  private sub = new Subscription();
  seats: ISeatBooking[] = [];
  room: ISinemaRoom;

  ngOnInit() {
    this.sub.add(this.bookingService.state$.subscribe(state => {
      if (!state?.payload?.current) {
        return;
      }
      this.seats = state.payload.current.seats;
      this.room = state.payload.current.room;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
