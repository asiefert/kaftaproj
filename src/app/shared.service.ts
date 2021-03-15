import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {


  // readonly APIUrl = "http://localhost:3000/api";
  // readonly PhotoUrl = "http://localhost:3000/photos";
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
  // Frank edited this updateUser(){}
  updateUser(userID: any, val: any) {
    return this.http.put(this.APIUrl + '/users/' + userID, val);
  }
  deleteUser(val: any) {
    return this.http.delete(this.APIUrl + '/users/' + val);
  }

  // tutor
  getTutorList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/tutors');
  }

  //TODO: Remove hardcoding and let user be selected automatically when signed in
  getMatchList(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/students/match/' + val);
  }

  // schedule
  getTutorScheduleList(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/schedules/tutorid/' + val);
  }

  getStudentScheduleList(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/schedules/studentid/' + val);
  }

  // uploadPhoto(val: any) {
  //   return this.http.post(this.APIUrl + '/user/savefile', val);
  // }

  // getAllUserNames(): Observable<any[]> {
  //   return this.http.get<any>(this.APIUrl + '/user/GetAllDepartmentNames');
  // }
}

