import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Subscription } from 'rxjs';
import { BookingAction, ICinemaSession } from '../../models/booking.model';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  inform: { id: number, cost: number }[];
  sum: number;

  constructor(private bookingService: BookingService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.sub.add(this.bookingService.state$.subscribe(state => {
      if ([BookingAction.changeSeat, BookingAction.changeDate].includes(state.action) && state.payload?.current) {
        this.setTax(state.payload.seatIds, state.payload.current)
      } else if(state.action === BookingAction.loadData) {
        this.sum = 0;
        this.inform = [];
        this.cdr.detectChanges();
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setTax(seatIds: number[], session: ICinemaSession) {
    if (!session?.seats?.length) {
      this.sum = 0;
      return [];
    }
    
    this.sum = 0;
    this.inform = session.seats
      .filter(_seat => seatIds.includes(_seat.id))
      .map(_seat => {
        this.sum += _seat.cost;
        return { id: _seat.id, cost: _seat.cost };
      });

    this.cdr.detectChanges();
  }

}
