import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaListComponent } from './components/cinema-list/cinema-list.component';
import { CinemaItemComponent } from './components/cinema-item/cinema-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CinemaListService } from './services/cinema-list.service';
import { CinemaListDataService } from './services/cinema-list-data.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CinemaListComponent, CinemaItemComponent],
  exports: [CinemaListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CinemaListService, CinemaListDataService]
})
export class CinemaListModule { }
