import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="vaibhav"&& password=="Pass@123"){
      sessionStorage.setItem('username',username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Doctor login Successful");
    let user=sessionStorage.getItem('username');
    return !(user==null);
  }

  logout(){
    console.log("Doctor logout Successful");
    sessionStorage.removeItem('username');
  }
}
