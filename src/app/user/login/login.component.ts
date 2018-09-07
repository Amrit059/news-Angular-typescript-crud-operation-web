import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="Welcome to Login";
  loginUserData={}

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
 
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res =>{ console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigate(['/create']);},
      err => console.log(err)
    )
  }
  resetForm(myForm: NgForm){
    console.log("Reset Form")
    myForm.reset();
  }
}
