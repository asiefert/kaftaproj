import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up-tutor',
  templateUrl: './sign-up-tutor.component.html',
  styleUrls: ['./sign-up-tutor.component.css']
})
export class SignUpTutorComponent implements OnInit {

  constructor(private auth: AuthService, private service: SharedService) { }

  ldata!: any;
  Subject!: string;
  Information!: string;
  link!: string;
  price!: string;
  discount!: string;
  photo!: string;

  ngOnInit(): void {
    //console.log(this.auth.ID);
    this.loadtutor();
  }

  loadtutor() {
    this.service.getTutorById(this.auth.ID)
      .subscribe((data: any) => {
        this.ldata = data;
        this.Subject = data.Subject;
        this.Information = data.Information;
        this.link = data.link;
        this.price = data.price;
        this.discount = data.discount;
      });
  }


  updateTutor() {
    var val = {
      UserId: this.auth.ID,
      Subject: this.Subject,
      Information: this.Information,
      link: this.link,
      price: this.price,
      discount: this.discount
    };
    console.log(this.ldata);
    if (this.ldata == null) {
      console.log("post");
      this.service.addTutor(val).subscribe(res => {
        alert(res.toString())
      });
      this.loadtutor();
    }
    else {
      console.log("put");
      this.service.updateTutor(val).subscribe(res => {
        alert(res.toString())
      });
    }
  }
}
