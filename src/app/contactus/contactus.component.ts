
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators,FormsModule,ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 title="ContactUs";
 //query=[];

 gender=['male','female']
 contactUSForm:FormGroup;
  constructor() { }

  ngOnInit() {
this.contactUSForm=new FormGroup({
  'uData':new FormGroup({'username':new FormControl(null,Validators.required),
  'emailId':new FormControl(null,[Validators.required,Validators.email]),
  'message':new FormControl(null,Validators.required)
}),
    'gender':new FormControl('male'),
    'hobby':new FormArray([])
  });
  }
  submit(){
    console.log(this.contactUSForm);
  }
  addhobby(){
  const control= new FormControl(null,Validators.required);
  (<FormArray>this.contactUSForm.get('hobby')).push(control);
  }


 // infoUser(){
    
 // }
 // resetForm(myForm:NgForm){
 ///   console.log("Reset Form");
  //  myForm.reset();
 // }
}
