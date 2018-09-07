import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  news={};
   constructor(private auth:NewsService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNewsDetailById(this.route.snapshot.params['id'])

}
getNewsDetailById(id){
this.auth.getById(id)
.subscribe(data=>{
this.news=data;
})
}

updateNews(id, data) {
  this.auth.updatenews(id, data)
    .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/detail']);
      }, (err) => {
        console.log(err);
      }
    );
}

  resetForm(myForm: NgForm){
    console.log("Reset Form")
    myForm.reset();
  }
}
