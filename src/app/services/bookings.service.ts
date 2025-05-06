import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  constructor() { }
  bookings:any[]=[];
  addNewBooking(newbook:any){
    this.bookings.push(newbook);
  }
  getAllBookings(){
    return of (this.bookings);
  }
  getBookingByUsername(uname:any){
    return of (this.bookings.filter((e)=>e.username==uname))
  }
}
