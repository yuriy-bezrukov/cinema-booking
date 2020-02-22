import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  private sub = new Subscription()
  private cinemaId: number;
  private sessionId: number;
  private seatsId: number[];
  displayPayButton: boolean;

  ngOnInit() {
    this.cinemaId = Number.parseInt(this.route.snapshot.paramMap.get('cinema'));
    this.bookingService.getSessions(this.cinemaId).subscribe();

    this.sub.add(this.bookingService.state$.subscribe(state => {
      if (!state.action) {
        return;
      }
      this.seatsId = state.payload.seatIds;
      this.sessionId = state.payload.current.id;
      this.displayPayButton = !!state.payload.seatIds.length;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  pay() {
    alert('todo');
    // this.bookingService.
  }

}
