import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  displaymember: any = [];
  viewcalendar: any = [];
  managecalendar: any = [];


  displayManageCalendar() {
    this.displaymember = '';
    this.viewcalendar = '';
    this.managecalendar = true;
  }

  displayviewcalendar() {
    this.displaymember = '';
    this.viewcalendar = true;
    this.managecalendar = '';
  }
  constructor() {
    this.displaymember = true;
    this.viewcalendar = '';
    this.managecalendar = '';
  }

  ngOnInit(): void {
  }

}
