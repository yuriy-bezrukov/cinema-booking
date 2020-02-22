import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaListComponent } from './pages/cinema-list/components/cinema-list/cinema-list.component';
import { BookingComponent } from './pages/booking/components/booking/booking.component';


const routes: Routes = [
  { path: 'cinema-list', component: CinemaListComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', redirectTo: 'cinema-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
