import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private wishservice:WishlistService){}
  wishlist:any;
  add=0;price=0;
  ngOnInit(){
    this.wishservice.getAllItems().subscribe((data)=>{
      this.wishlist=data;
      console.log(this.wishlist);
       this.price= this.wishservice.getPrice();
       console.log(this.price)
    
  })
}  
re:any;
deleteProductById(vid:any){
   this.re=this.wishservice.deleteProduct(vid);
   this.price= this.wishservice.getPrice();
}
orderMsg:any;
buyNow() {
  Swal.fire({
    text: "Order Successful",
    icon: "success"
  });
}
}


