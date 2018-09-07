import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 news=[];
 catagories="Natural";
  constructor( private auth:NewsService ,private router:Router) { }

  ngOnInit() {
    this.auth.getnews()
    .subscribe(data => {
      this.news=data;
    });
   
  }
}
