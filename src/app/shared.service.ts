import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  readonly APIUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/api";
  readonly PhotoUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/photos";

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any[]> {
    console.log(this.APIUrl + '/user');
    return this.http.get<any>(this.APIUrl + '/user');
  }
  addUser(val: any) {
    return this.http.post(this.APIUrl + '/user', val);
  }
  updateUser(val: any) {
    return this.http.put(this.APIUrl + '/user', val);
  }
  deleteUser(val: any) {
    return this.http.delete(this.APIUrl + '/user/' + val);
  }

  // uploadPhoto(val: any) {
  //   return this.http.post(this.APIUrl + '/user/savefile', val);
  // }

  // getAllUserNames(): Observable<any[]> {
  //   return this.http.get<any>(this.APIUrl + '/user/GetAllDepartmentNames');
  // }
}

