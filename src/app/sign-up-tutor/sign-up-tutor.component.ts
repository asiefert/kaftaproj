import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-sign-up-tutor',
  templateUrl: './sign-up-tutor.component.html',
  styleUrls: ['./sign-up-tutor.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  constructor() { }

  ngOnInit(): void {
  }

}
