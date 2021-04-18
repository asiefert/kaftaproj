import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService {
  readonly APIUrl = "http://localhost:1337";
  readonly PhotoUrl = "http://localhost:1337/photos";
  //readonly APIUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/api";
  //readonly PhotoUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/photos";

  ID_KEY = 'ID';
  NAME_KEY = 'name';
  TOKEN_KEY = 'KAFTA_token';

  constructor(private http: HttpClient, private router: Router) { }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get ID() {
    return localStorage.getItem(this.ID_KEY);
  }

  get isAuthenticated() {
    //console.log(!!localStorage.getItem(this.TOKEN_KEY));
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get tokenHeader() {
    // var header = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
    // return new RequestOptions({ headers: header });


    return {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + localStorage.getItem(this.TOKEN_KEY))
    }

    // let headers = new HttpHeaders({
    //   'authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)
    // });
    // return {
    //   headers: headers
    // }

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)
    //   })
    // };
    // return httpOptions;


  }

  isLoggedIn() {
    //console.log(this.isAuthenticated);
    return this.isAuthenticated == true;
  }

  logout() {
    localStorage.removeItem(this.ID_KEY);
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  login(loginData: any) {
    //console.log("login in ");
    //console.log(loginData);
    this.http.post(this.APIUrl + '/auth/login', loginData).subscribe(res => {
      //console.log(res);
      this.authenticate(res);
    })
  }

  authenticate(res: any) {
    // console.log(res.token);
    // console.log(res.loginname);
    // console.log(res.UserId);
    if (!res.token)
      return;
    localStorage.setItem(this.ID_KEY, res.UserId)
    localStorage.setItem(this.NAME_KEY, res.loginname)
    localStorage.setItem(this.TOKEN_KEY, res.token)
    this.router.navigate(['/']);
  }
}
