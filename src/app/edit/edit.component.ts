import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service: SharedService) { }

  User: any = [];
  PhotoFilePath!: string;

  ngOnInit(): void {
    //this.updateUser();
  }

  updateUser(userID: any) {
    // this.service.getTutorList().subscribe(id => {
    //   this.User = id;
    //   console.log(this.User);
    //   //this.PhotoFilePath = this.service.PhotoUrl + "/";
    // });
    
    const editMock = {UserId:userID,FirstName:"mike123",LastName:"Ten123",loginName:"benten",password:"12345",email:"benten@gmail.com",isTutor:0,isStudent:1,information:"Testing users",photo:"alien.png",modifiedDate:"0000-00-00",modifiedBy:"system"};
    console.log(editMock);
    this.service.deleteUser([15]);

    // this.service.updateUser().subscribe(editMock => {
    //   this.User = editMock;
    //   console.log(this.User);
    //   this.PhotoFilePath = this.service.PhotoUrl + "/";
    // });
  }

}
