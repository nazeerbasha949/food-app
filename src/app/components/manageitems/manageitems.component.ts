import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-manageitems',
  templateUrl: './manageitems.component.html',
  styleUrl: './manageitems.component.css'
})
export class ManageitemsComponent {
  constructor(private itemservice:ItemsService){}
  newitems:any;

  ngOnInit(){
    this.itemservice.getAllItems().subscribe((data)=>{
      this.newitems=data;
      console.log(this.newitems);
    })
  }
  re:any;
  deleteProductById(vid:any){
    this.re=this.itemservice.deleteProduct(vid);
  }
  dummy:any;
  updateToDummy(newpro:any){
    this.dummy=newpro;
    console.log(this.dummy)
  }
  result:any;
  updateNow(){
    this.result=this.itemservice.updateProduct(this.dummy);
    alert(this.result);
  }
}
