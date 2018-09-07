import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';


@Injectable()
export class AuthService {
 private loginUrl="http://localhost:3000/index/user/login";
private signupUrl="http://localhost:3000/index/user/register";
private url="http://localhost:3000/index/user";
 constructor(private http:HttpClient) { }
 getallnews(){
  return this.http.get<any>(this.url);
}   
 registerUser(user){
  return this.http.post<any>(this.signupUrl,user)
 }


 loginUser(user){
   return this.http.post<any>(this.loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token'); //!!only for boolen value.
  }
  Logout(){
    localStorage.removeItem('token')
  }
}
