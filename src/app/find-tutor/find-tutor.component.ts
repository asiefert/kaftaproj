import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent implements OnInit {

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
