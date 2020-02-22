import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ISeatBooking, BookingAction, TypeBooking } from '../../models/booking.model';
import { Subscription } from 'rxjs';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  isSelect: boolean = false;

  @Input() seat: ISeatBooking;

  constructor(private bookingService: BookingService, private cdr: ChangeDetectorRef) { }

  toggle() {
    if(this.seat.typeBooking === TypeBooking.empty) {
      this.bookingService.toggleSeat(this.seat.id);
    }
  }

  ngOnInit() {
    this.sub.add(this.bookingService.state$.subscribe(state => {
      if (state.action === BookingAction.changeSeat) {
        let oldState = this.isSelect;
        this.isSelect = state.payload.seatIds.includes(this.seat.id);
        if (oldState !== this.isSelect) {
          this.cdr.detectChanges();
        }
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
