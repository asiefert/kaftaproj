import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})

export class AdminEditComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any = [];

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList() {
    this.service.getUserList().subscribe(data => {
      this.UserList = data;
      console.log(this.UserList);
    });

    // this.service.getUserList().subscribe(data => {
    //   this.UserList = data;
    //   console.log(this.UserList);
    // });
  }
}

