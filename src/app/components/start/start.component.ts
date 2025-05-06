import { Component } from '@angular/core';
import { StartService } from '../../services/start.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
    constructor(private startservice:StartService,private route:Router){}
    items:any;
    ngOnInit(){
      this.startservice.getAllSamples().subscribe((data)=>{
        this.items=data;
        console.log(this.items)
      })
     }
     openView(){
      this.route.navigateByUrl('/login');
    }
}
