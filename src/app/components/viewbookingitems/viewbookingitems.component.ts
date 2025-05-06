import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-viewbookingitems',
  templateUrl: './viewbookingitems.component.html',
  styleUrl: './viewbookingitems.component.css'
})
export class ViewbookingitemsComponent {
  constructor(private service:BookingsService){}
  items:any;
  ngOnInit(){
    this.service.getAllBookings().subscribe((data)=>{
      this.items=data;
    })
  }
}
