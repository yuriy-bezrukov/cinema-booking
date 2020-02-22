import { IDate } from 'src/app/shared/models/date.model';

export interface ICinema {
    id: number;
    title: string;
    description: string;
    year: number;
    date: IDate[];
    img: string;
}

export const IMAGE_CINEMA_PLACEHOLDER = 'https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png';