import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 title="Detail NEWS";
  news=[];
  constructor(private auth:NewsService, private router:Router) { }

  ngOnInit() {
     this.auth.getnews()
    .subscribe(data => {
      this.news=data;
    });
  }

//  delete(_id) {
//    if(confirm("Are you sure?")){
//      this.auth.deletenews(_id)
//      .subscribe(res=>{
//        
//      })
//      
//    }
//  }
//  delete(_id){
//    if (confirm("Are you sure you want to delete " + _id + "?")){
//       this.auth.deletenews(_id).subscribe((res) => console.log(res));
//    }
//
//   }
}
