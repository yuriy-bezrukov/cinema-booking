import { Component, Input } from '@angular/core';
import { ICinema, IMAGE_CINEMA_PLACEHOLDER } from '../../models/cinema-list.model';

@Component({
  selector: 'app-cinema-item',
  templateUrl: './cinema-item.component.html',
  styleUrls: ['./cinema-item.component.scss']
})
export class CinemaItemComponent {

  @Input() cinema: ICinema;
  placeholderImage = IMAGE_CINEMA_PLACEHOLDER;

}
