import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent {
password:string='';
username2:string='';
invalidLogin=false;

constructor(private adminauth:AdminauthService, private router:Router){}



checkLogin(){
   if(this.adminauth.authenticate(this.username2,this.password)){
    this.router.navigate(['/admin']);
    this.invalidLogin=false;
   }
   else{
    this.invalidLogin=true;
    alert("Wrong Credentials")
    this.router.navigate(['/home']);
   }
}

}
