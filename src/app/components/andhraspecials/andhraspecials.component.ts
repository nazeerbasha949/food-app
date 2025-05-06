import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-andhraspecials',
  templateUrl: './andhraspecials.component.html',
  styleUrl: './andhraspecials.component.css'
})
export class AndhraspecialsComponent {
  constructor(private service:ItemsService,private router:Router){}
  famousitems:any;
  ngOnInit(){
    this.service.getAllfamousitems().subscribe((data)=>
   {this.famousitems=data} );
    }
  openView(hotid:any){
    this.router.navigateByUrl('/user/view/'+hotid);
  }
}
