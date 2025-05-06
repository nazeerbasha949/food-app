import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podulu',
  templateUrl: './podulu.component.html',
  styleUrl: './podulu.component.css'
})
export class PoduluComponent {
  constructor(private service:ItemsService,private router:Router){}
  podulu:any;
  openview(poduluuid:any){
    this.router.navigateByUrl("/user/view/"+poduluuid);
  }
  ngOnInit(){
    this.service.getAllpodulu().subscribe((data)=>
   {this.podulu=data} );
  }
  openView(pid:any){
    this.router.navigateByUrl('/user/view/'+pid);
  }
}
