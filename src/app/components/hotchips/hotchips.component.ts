import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotchips',
  templateUrl: './hotchips.component.html',
  styleUrl: './hotchips.component.css'
})
export class HotchipsComponent {
  constructor(private hotservice:ItemsService,private route:Router){}
  chips:any;
  ngOnInit(){
    this.hotservice.getAllHotChips().subscribe((data)=>{
      this.chips=data;
      console.log(this.chips);
    })
  }
  openView(hotid:any){
    this.route.navigateByUrl('/user/view/'+hotid);
  }

}
