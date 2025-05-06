import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { WishlistService } from '../../services/wishlist.service';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrl: './viewitems.component.css'
})
export class ViewitemsComponent {
  constructor(private act:ActivatedRoute,private service:ItemsService,private wishservice:WishlistService,private route:Router,private bookservice:BookingsService){}
  hid:any;
  newItem:any;
  username:any;
  user:any;
  address:any;
  phone:any;
  newbooking:any;
  confirmOrder(){
    this.newbooking={
      productId:this.newItem.productId,
      productName:this.newItem.productName,
      productPrice:this.newItem.productPrice,
      username:this.username,
      phone:this.phone,
      address:this.address
    }
    this.bookservice.addNewBooking(this.newbooking);
    alert("Order booked successfully")
    console.log(this.newbooking)
  }
  ngOnInit(){
    this.user=localStorage.getItem('loggedin');
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    this.hid=this.act.snapshot.paramMap.get('id');
    this.newItem=this.service.getItemById(this.hid);
    
    console.log(this.newItem);
  }
  addItemToWishlist(){
    this.wishservice.addToWishlist(this.newItem);
    //this.route.navigateByUrl('/profile/wishlist');
  }
}
