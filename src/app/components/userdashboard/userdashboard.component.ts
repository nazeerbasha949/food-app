import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private wishservice:WishlistService,private route:Router){}
  len:any;
  ngDoCheck(){
    this.len=this.wishservice.getWishlistLength();
  }
    ngOnInit(){
      if(localStorage.getItem('loggedin')=="null"){
        this.route.navigateByUrl("/")
      }
    }
    logout(){
      localStorage.removeItem('loggedin');
      this.route.navigateByUrl('/');
    }

}
