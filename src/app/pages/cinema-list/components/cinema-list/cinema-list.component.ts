import { Component, OnInit, OnDestroy } from '@angular/core';
import { CinemaListService } from '../../services/cinema-list.service';
import { ICinema } from '../../models/cinema-list.model';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {

  list: ICinema[];

  constructor(private cinemaListService: CinemaListService) { }

  ngOnInit() {
    this.cinemaListService.getList().subscribe(res => this.list = res);
  }

}
