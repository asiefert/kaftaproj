import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})

export class AdminEditComponent implements OnInit {

  constructor(private auth: AuthService) { }

  UserList: any = [];

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList() {
    this.auth.getUserList().subscribe(data => {
      this.UserList = data;
      console.log(this.UserList);
    });

    // this.service.getUserList().subscribe(data => {
    //   this.UserList = data;
    //   console.log(this.UserList);
    // });
  }
}

