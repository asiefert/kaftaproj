import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-managecalendar',
  templateUrl: './managecalendar.component.html',
  styleUrls: ['./managecalendar.component.css']
})
export class ManagecalendarComponent implements OnInit {
  ScheduleList: any = [];
  userid: any;
  sched: any;

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    this.refreshscheduleList();
  }

  addClick() {
    this.sched = {

    }

    this.refreshscheduleList();
  }

  editClick(item: any) {

    this.refreshscheduleList();
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {

    }
  }
  refreshscheduleList() {
    this.userid = 1;
    this.service.getTutorScheduleList(this.userid).subscribe(data => {
      this.ScheduleList = data;
    });
  }


}
