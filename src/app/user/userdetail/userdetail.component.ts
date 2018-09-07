import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
title="User Detail";
  users=[];
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getallnews()
    .subscribe(data => {
      this.users=data;
    });
  }

}
