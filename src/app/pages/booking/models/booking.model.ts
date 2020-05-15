import { IDate } from '../../../shared/models/date.model';

export enum TypeSeat {
    direct,
    left,
    right
}

export interface ISeat {
    id: number
    x: number,
    y: number
    typeSeat: TypeSeat,
}

export enum TypeBooking {
    other = 'other',
    my = 'my',
    empty = 'empty'
}

export interface ISeatBooking extends ISeat {
    typeBooking: TypeBooking;
    cost: number;
}

export interface ISinemaRoom {
    x: number;
    y: number;
    img: string;
}

export interface ICinemaSession {
    id?: number;
    date?: IDate;
    room?: ISinemaRoom;
    seats?: ISeatBooking[];
}

export enum BookingAction {
    changeSeat = 'changeSeat',
    changeDate = 'changeDate',
    loadData = 'loadData'
}

export interface IStateBooking {
    action?: BookingAction,
    payload?: {
        sessions?: ICinemaSession[],
        current?: ICinemaSession,
        seatIds?: number[]
    }
}