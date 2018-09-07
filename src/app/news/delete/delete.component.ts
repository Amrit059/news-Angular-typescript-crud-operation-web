import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
news={};
  constructor(private auth:NewsService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNewsDetailById(this.route.snapshot.params['id']);
      }
  getNewsDetailById(id){
    this.auth.getById(id)
    .subscribe(data => {
      this.news=data;
    });

  }
  delete(_id){
    if (confirm("Are you sure you want to delete " + _id + "?")){
       this.auth.deletenews(_id).subscribe((res) => console.log(res));
    }
    this.router.navigate (["/detail"]);
}

}