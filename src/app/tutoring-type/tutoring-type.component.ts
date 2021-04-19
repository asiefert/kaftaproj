import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-tutoring-type',
  templateUrl: './tutoring-type.component.html',
  styleUrls: ['./tutoring-type.component.css']
})
export class TutoringTypeComponent implements OnInit {

  tutoringtype!: string;
  tutoringTypes!: any;


  // tutoringTypes: string[] =
  // ['Lab/Homework Help',
  // 'Exam Preparation',
  // 'General Questions on Subject',
  // 'Other'];

  constructor(private auth: AuthService, private service: SharedService) { }

  ngOnInit(): void {
    this.loadstudent();
    this.tutoringTypes =
      [
        {
          id: 1,
          value: 'Lab/Homework Help',
        },
        {
          id: 2,
          value: 'Exam Preparation',
        },
        {
          id: 3,
          value: 'General Questions on Subject',
        },
        {
          id: 4,
          value: 'Other',
        }]
  }

  loadstudent() {
    this.service.getStudentById(this.auth.ID)
      .subscribe((data: any) => {
        this.tutoringtype = data.tutoringtype;
      });
  }


  updateStudent() {
    var val = {
      UserId: this.auth.ID,
      tutoringtype: this.tutoringtype,
    };
    console.log(val);
    this.service.updateStudentTutoringType(val).subscribe(res => {
      alert(res.toString())
    });

  }


}

