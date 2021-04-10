import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private auth: AuthService) { }

  loginData = {
    loginname: '',
    password: ''
  }

  login() {
    this.auth.login(this.loginData);
  }

}
