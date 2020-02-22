import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from '../../services/booking.service';
import { BookingAction, ICinemaSession } from '../../models/booking.model';

@Component({
  selector: 'app-date-panel',
  templateUrl: './date-panel.component.html',
  styleUrls: ['./date-panel.component.scss']
})
export class DatePanelComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  sessions: ICinemaSession[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.sub.add(this.bookingService.state$.subscribe(state => {
      if (state.action === BookingAction.loadData) {
        this.sessions = state.payload.sessions;
      }
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selectDate(session: ICinemaSession) {
    this.bookingService.changeDate(session.date);
  }

}
