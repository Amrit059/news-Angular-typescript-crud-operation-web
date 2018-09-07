import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
catagories:"";
  news=[];
  constructor(private auth:NewsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getNews(this.route.snapshot.params['catagories'])
}
getNews(catagories){
this.auth.getBycatagory(catagories)
.subscribe(data => {
  this.news=data;
});
}


}