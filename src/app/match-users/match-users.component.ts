import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-match-users',
  templateUrl: './match-users.component.html',
  styleUrls: ['./match-users.component.css']
})
export class MatchUsersComponent implements OnInit {

  constructor(private auth: AuthService, private service: SharedService) { }

  MatchingTutors: any = [];
  PhotoFilePath!: string;
  @Input() valueToPass = 0;

  ngOnInit(): void {
    this.refreshMatchingList();
  }

  refreshMatchingList() {
    this.service.getMatchList(this.auth.ID).subscribe(data => {
      this.MatchingTutors = data;
      this.PhotoFilePath = this.service.PhotoUrl + "/";
    });
  }

}
