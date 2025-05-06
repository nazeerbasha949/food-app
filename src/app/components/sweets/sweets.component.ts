import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrl: './sweets.component.css'
})
export class SweetsComponent {
  constructor(private sweetservice:ItemsService,private route:Router){}
    sweets:any;
    ngOnInit(){
      this.sweetservice.getAllSweets().subscribe((data)=>{
        this.sweets=data;
        console.log(this.sweets);
      })
    }
    openView(sid:any){
      this.route.navigateByUrl('/user/view/'+sid);
    }
}
