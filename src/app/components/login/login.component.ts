import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;
  pwd:any;
  constructor(private route:Router){}
  checkLogin(){
    this.pwd=this.username.slice(0,3);
    this.pwd=this.pwd+"123"
    if(this.username=="admin"){
      if(this.password=="12345"){
        //alert("login successful")
        Swal.fire({
          title: "Good job admin!",
          text: "Login Successful!",
          icon: "success"
        });
        this.route.navigateByUrl("/admin/home")
        this.user={
          username:this.username
        }
        localStorage.setItem('loggedin',JSON.stringify(this.user))
      }
      else{
        alert("Invalid password")
      }
    }
    else if(this.password==this.pwd){
      Swal.fire({
        title: "Good job!"+this.username,
        text: "Login Successful",
        icon: "success"
      });
      this.route.navigateByUrl("/user")
      this.user={
        username:this.username
      }
      localStorage.setItem('loggedin',JSON.stringify(this.user))
    }
    else{
      alert("user not found")
    }
  }
}
