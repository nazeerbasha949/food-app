import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vadiyalu',
  templateUrl: './vadiyalu.component.html',
  styleUrl: './vadiyalu.component.css'
})
export class VadiyaluComponent {
  constructor(private service:ItemsService,private router:Router){}
  vadiyalu:any;
  openview(vadiyaluuid:any){
    this.router.navigateByUrl("/user/view/"+vadiyaluuid);
  }
  ngOnInit(){
    this.service.getAllvadiyalu().subscribe((data)=>
   {this.vadiyalu=data} );
  }
  openView(vid:any){
    this.router.navigateByUrl('/user/view/'+vid);
  }

}
