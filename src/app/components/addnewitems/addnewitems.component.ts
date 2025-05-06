import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewitems',
  templateUrl: './addnewitems.component.html',
  styleUrl: './addnewitems.component.css'
})
export class AddnewitemsComponent {
  addForm:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private itemservice:ItemsService,private route:Router){
    this.addForm=fb.group({
    productId:fb.control('',Validators.required),
    productName:fb.control('',Validators.required),
    productCompany:fb.control('',Validators.required),
    productDescription:fb.control('',Validators.required),
    productType:fb.control('',Validators.required),
    productPrice:fb.control('',Validators.required),
    productImage:fb.control('',Validators.required),
    })
  }
  addItem(){
    this.itemservice.addNewItem(this.addForm.value);
    alert("Added successfully");
    console.log(this.addForm.value);
    //this.route.navigateByUrl('/admin/manage');

  }
  options=["hot chips","sweets","vadiyalu","podulu","pickels"]
  
}
