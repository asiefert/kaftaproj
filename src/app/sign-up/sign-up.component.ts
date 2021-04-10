import { User } from './../shared/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  @Input() user: any;
  FirstName!: string;
  LastName!: string;
  loginName!: string;
  password!: string;
  email!: string;
  isTutor!: string;
  isStudent!: string;
  information!: string;
  checkValue!: string;

  ngOnInit(): void {

  }

  addUser() {
    var val = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      loginName: this.loginName,
      password: this.password,
      email: this.email,
      isTutor: 1,
      isStudent: 0,
      information: this.information,
      photo: '',
      modifiedDate: '',
      modifiedBy: ''
    };
    //console.log(val);
    this.service.addUser(val).subscribe(res => {
      alert(res.toString())
    });

    if (this.checkValue == 'Tutor') {
      this.router.navigate(['/register-tutor']);
    }
    else {
      this.router.navigate(['/register-student']);
    }

  }
}
