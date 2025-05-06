import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickels',
  templateUrl: './pickels.component.html',
  styleUrl: './pickels.component.css'
})
export class PickelsComponent {
  constructor(private service:ItemsService,private router:Router){}
  pickles:any;
  openview(picklessid:any){
    this.router.navigateByUrl("/user/view/"+picklessid);
  }
  ngOnInit(){
    this.service.getAllpickles().subscribe((data)=>
   {this.pickles=data} );
  }
  openView(xid:any){
    this.router.navigateByUrl('/user/view/'+xid);
  }

}
