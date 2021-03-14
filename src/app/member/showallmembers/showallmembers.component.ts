import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-showallmembers',
  templateUrl: './showallmembers.component.html',
  styleUrls: ['./showallmembers.component.css']
})
export class ShowallmembersComponent implements OnInit {

  constructor(private service: SharedService) { }

  TutorList: any = [];
  PhotoFilePath!: string;

  ngOnInit(): void {
    this.refreshTutorList();
  }

  refreshTutorList() {
    this.service.getTutorList().subscribe(data => {
      this.TutorList = data;
      console.log(this.TutorList);
      this.PhotoFilePath = this.service.PhotoUrl + "/";
    });
  }

}
