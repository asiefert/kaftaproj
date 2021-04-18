import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up-student',
  templateUrl: './sign-up-student.component.html',
  styleUrls: ['./sign-up-student.component.css']
})
export class SignUpStudentComponent implements OnInit {

  constructor(private auth: AuthService, private service: SharedService) { }

  ldata!: any;
  Interest!: string;
  Information!: string;
  link!: string;
  budgetprice!: string;

  ngOnInit(): void {
    this.loadstudent();
  }

  loadstudent() {
    this.service.getStudentById(this.auth.ID)
      .subscribe((data: any) => {
        this.ldata = data;
        this.Interest = data.Interest;
        this.Information = data.Information;
        this.link = data.link;
        this.budgetprice = data.price;
      });
  }


  updateStudent() {
    var val = {
      UserId: this.auth.ID,
      Interest: this.Interest,
      Information: this.Information,
      link: this.link,
      budgetprice: this.budgetprice
    };
    console.log(this.ldata);
    if (this.ldata == null) {
      console.log("post");
      this.service.addStudent(val).subscribe(res => {
        alert(res.toString())
      });
      this.loadstudent();
    }
    else {
      console.log("put");
      this.service.updateStudent(val).subscribe(res => {
        alert(res.toString())
      });
    }
  }
}
