import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import {Router} from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']

})
export class UserLoginComponent implements OnInit {
  data : User;
  router : Router;
  constructor( private login : AppService, private _route : Router) { 
    this.data = {
      userID : '',
      password:''
    }
    login.url = "http://localhost:3000/login";
    this.router = _route;
  }

  ngOnInit() {
    
  }

  signIn(event){
      this.login.data = this.data;
      if(this.data.userID !='' && this.data.password != ''){
        this.login.postService().subscribe(response=>{
          if(response.json().status == 1){
            this.router.navigate(['/accountsummary']);
          }
        });
      }
      else{
        alert("please enter details");
      }
  }

}
interface User{
  userID : String,
  password:String
}