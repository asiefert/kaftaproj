import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {


  // readonly APIUrl = "http://localhost:1337/api";
  // readonly PhotoUrl = "http://localhost:1337/photos";
  readonly APIUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/api";
  readonly PhotoUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/photos";

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any[]> {
    console.log(this.APIUrl + '/users');
    return this.http.get<any>(this.APIUrl + '/users');
  }
  addUser(val: any) {
    return this.http.post(this.APIUrl + '/users', val);
  }
  updateUser(val: any) {
    return this.http.put(this.APIUrl + '/users', val);
  }
  deleteUser(val: any) {
    return this.http.delete(this.APIUrl + '/users/' + val);
  }

  getTutorList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/tutors');
  }

  // uploadPhoto(val: any) {
  //   return this.http.post(this.APIUrl + '/user/savefile', val);
  // }

  // getAllUserNames(): Observable<any[]> {
  //   return this.http.get<any>(this.APIUrl + '/user/GetAllDepartmentNames');
  // }
}

