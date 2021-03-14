import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

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