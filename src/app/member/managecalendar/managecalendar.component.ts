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

  ModalTitle!: string;
  ActivateAddEditCal: boolean = false;
  sched: any;

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    this.refreshscheduleList();
  }

  addClick() {
    this.sched = {
      ScheduleId: 0,
      ScheduleDate: "",
      Time: "",
      isTutorConfirmed: "",
      TutorFeedback: "",
      StudentId: "",
      isStudentConfirmed: "",
      StudentFeedback: "",
      isCompleted: "",
    }
    this.ModalTitle = "Add Schedule";
    this.ActivateAddEditCal = true;
    this.refreshscheduleList();
  }

  editClick(item: any) {
    console.log(item);
    this.sched = item;
    this.ModalTitle = "Edit Schedule";
    this.ActivateAddEditCal = true;
    this.refreshscheduleList();
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteSchedule(item.ScheduleId).subscribe(data => {
        this.refreshscheduleList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditCal = false;
    this.refreshscheduleList();
  }


  refreshscheduleList() {
    this.userid = 1;
    this.service.getTutorScheduleList(this.userid).subscribe(data => {
      this.ScheduleList = data;
    });
  }


}
