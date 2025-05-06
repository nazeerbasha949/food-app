import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StartService } from '../../services/start.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  /*constructor(private startservice:StartService,private route:Router){}
  items:any;
  ngOnInit(){
    this.startservice.getAllSamples().subscribe((data)=>{
      this.items=data;
      console.log(this.items)
    })
   }
   openView(){
    this.route.navigateByUrl('/');
  }*/
}
