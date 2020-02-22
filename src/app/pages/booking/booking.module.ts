import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components/booking/booking.component';
import { DatePanelComponent } from './components/date-panel/date-panel.component';
import { RoomComponent } from './components/room/room.component';
import { SeatComponent } from './components/seat/seat.component';
import { PaymentInformationComponent } from './components/payment-information/payment-information.component';
import { BookingService } from './services/booking.service';
import { BookingDataService } from './services/booking-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BookingComponent,
    DatePanelComponent,
    RoomComponent,
    SeatComponent,
    PaymentInformationComponent
  ],
  exports: [BookingComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [BookingService, BookingDataService]
})
export class BookingModule { }
