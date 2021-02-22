import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-showallmembers',
  templateUrl: './showallmembers.component.html',
  styleUrls: ['./showallmembers.component.css']
})
export class ShowallmembersComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any = [];
  checkstring: any = [];

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList() {
    this.checkstring = "ABN";
    this.service.getUserList().subscribe(data => {
      this.checkstring = data;
      this.UserList = data;
    });
  }

}
