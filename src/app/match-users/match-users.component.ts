import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-match-users',
  templateUrl: './match-users.component.html',
  styleUrls: ['./match-users.component.css']
})
export class MatchUsersComponent implements OnInit {

  constructor(private service: SharedService) { }

  MatchingTutors: any = [];
  PhotoFilePath!: string;


  ngOnInit(): void {
    this.refreshMatchingList();
  }

  //TODO: Remove hardcoding so it pulls the authenticated user's id and matches based on that
  refreshMatchingList() {
    this.service.getMatchList(1).subscribe(data => {
      this.MatchingTutors = data;
      this.PhotoFilePath = this.service.PhotoUrl + "/";
    });
  }

}
