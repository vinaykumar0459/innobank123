import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls : ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  checkData:userRegister;
  message:String = '';
  validUser:Boolean = false;
  constructor(private _service:AppService,private _router:Router) { 

  }
 

  checkDetails(event){
    event.preventDefault();
    if(this.validUser == false){
        this._service.url = 'checkuser/'+this.checkData.uid+'/'+this.checkData.mobile;
        console.log(this._service.url);
        this._service.getService().subscribe( response=>{
          switch (response.code) {
          case 99:
              this.message = response.message;
              break;    
          case 100:
              this.message = response.message;
              break;
          case 101:
              this.message = response.message;
              break;
          case 102:
              this.validUser = true;
              break;
          case 110:
              this.message = response.message;
              break;
          }
        });
    }else{
       this._service.url = 'checkuser';
       this._service.data = this.checkData;
       this._service.postService().subscribe( response=>{
        switch (response.code) {
        case 103:
            this.message = response.message;
            break;
        case 104:
            this.message = response.message;
            break;
        case 105:
            this._router.navigate(['accountsummary']);
            break;
        }
        });
    }
    

    //this.validUser = true;
  }

  ngOnInit() {
    this.checkData = {
      uid :'',
      mobile :undefined,
      password :'',
      confpassword :''
    }
  }

}

interface userRegister{
    uid:String;
    mobile:Number;
    password:String;
    confpassword:String;
} 