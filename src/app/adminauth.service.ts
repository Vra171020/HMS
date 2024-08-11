import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2:string,password:string){
    if(username2=='admin' && password=='admin123'){
      sessionStorage.setItem("username2",username2);
      return true;
    }else{
      return false;
    }
  }
  isUserLoggedIn(){
    console.log("user login successful");
    let user=sessionStorage.getItem('username2');
    return !(user==null);
  }

  logout(){
    console.log("user logout successful")
    sessionStorage.removeItem('username2');
  }
}
