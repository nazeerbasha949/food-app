import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor() { }
  wishlist:any[]=[];
  addToWishlist(newpro:any){
    this.wishlist.push(newpro);
  }
  getAllItems(){
    return of (this.wishlist);
  }
  getWishlistLength(){
    return this.wishlist.length;
  }
  deleteProduct(vid:any){
    const index=this.wishlist.findIndex((e)=>e.productId==vid);
    if(index!=-1){
      this.wishlist.splice(index,1);
      return "deleted successfully";
    }
    else{
      return "product not found";
    }
  }
  getPrice(){
    let price= this.wishlist.reduce((acc,i)=>acc+parseInt(i.productPrice),0)
    console.log(price+"service")
    return price;
  }
}
