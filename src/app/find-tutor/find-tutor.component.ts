import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent implements OnInit {

  constructor(private auth: AuthService) { }
  TutorList: any = [];
  PhotoFilePath!: string;

  ngOnInit(): void {
    this.refreshTutorList();
  }

  refreshTutorList() {
    this.auth.getTutorList().subscribe(data => {
      this.TutorList = data;
      console.log(this.TutorList);
      this.PhotoFilePath = this.auth.PhotoUrl + "/";
    });
  }
}
