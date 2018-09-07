import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  t="Create NEWS";
  news=[];
  constructor(private auth:NewsService ,private router:Router) { }

  ngOnInit() {
  }

  addnews() {
    this.auth.createnews(this.news)
    .subscribe(
      res => {
        console.log(this.news)
    this.router.navigate (["/detail"]);
  },
      err => console.log(err)
    )
  }
  resetForm(myForm: NgForm){
    console.log("Reset Form")
    myForm.reset();
  }
}
