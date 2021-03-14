import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any = [];
  PhotoFilePath!: string;

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList() {
    this.service.getUserList().subscribe(data => {
      this.UserList = data;
      console.log(this.UserList);
      this.PhotoFilePath = this.service.PhotoUrl + "/";
    });
  }

}