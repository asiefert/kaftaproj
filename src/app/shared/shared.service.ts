import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  readonly MongoApi = "http://localhost:4000/api/v1/"; //Change to match DB URL in production
  readonly APIUrl = "http://localhost:1337/api";
  readonly PhotoUrl = "http://localhost:1337/photos";
  //readonly APIUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/api";
  //readonly PhotoUrl = "http://kaftanodejsapi-env.eba-je8nx85p.us-east-2.elasticbeanstalk.com/photos";
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any[]> {
    // console.log(this.APIUrl + '/users');
    return this.http.get<any>(this.APIUrl + '/users');
  }
  addUser(val: any) {
    console.log(val);
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

  getAvailableQuizzes(): Observable<any[]> {
    return this.http.get<any>(this.MongoApi + 'quizzes');
  }

  getQuiz(val: any): Observable<any[]> {
    return this.http.get<any>(this.MongoApi + 'quizzes/' + val)
  }

  uploadQuiz(val: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.parse(val);
    return this.http.post(this.MongoApi + 'quizzes/', body, { 'headers': headers, observe: 'response'})
}

  deleteQuiz(val:any):Observable<any> {
    return this.http.delete(this.MongoApi + 'quizzes/' + val);
  }

  // uploadPhoto(val: any) {
  //   return this.http.post(this.APIUrl + '/user/savefile', val);
  // }

  // getAllUserNames(): Observable<any[]> {
  //   return this.http.get<any>(this.APIUrl + '/user/GetAllDepartmentNames');
  // }
}

