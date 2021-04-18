import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-edit-schedule',
  templateUrl: './add-edit-schedule.component.html',
  styleUrls: ['./add-edit-schedule.component.css']
})

export class AddEditScheduleComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() sched: any;
  ScheduleId!: string;
  ScheduleDate!: string;
  Time!: string;
  isTutor!: string;
  TutorFeedback!: string;
  StudentId!: string;
  isStudent!: string;
  StudentFeedback!: string;
  isComp !: string;

  ScheduleList: any = [];

  ngOnInit(): void {
    this.loadScheduleList();
  }

  loadScheduleList() {

    this.service.getTutorScheduleList(1).subscribe((data: any) => {
      this.ScheduleList = data;
      this.ScheduleId = this.sched.ScheduleId;
      this.ScheduleDate = this.sched.ScheduleDate;
      this.Time = this.sched.Time;
      this.isTutor = this.sched.isTutorConfirmed;
      this.TutorFeedback = this.sched.TutorFeedback;
      this.StudentId = this.sched.StudentId;
      this.isStudent = this.sched.isStudentConfirmed;
      this.StudentFeedback = this.sched.StudentFeedback;
      this.isComp = this.sched.isCompleted;
    });
  }

  addSchedule() {
    var val = {
      ScheduleId: this.ScheduleId,
      ScheduleDate: this.ScheduleDate,
      Time: this.Time,
      TutorId: 1,
      isTutorConfirmed: this.isTutor,
      TutorFeedback: this.TutorFeedback,
      StudentId: this.StudentId,
      isStudentConfirmed: this.isStudent,
      StudentFeedback: this.StudentFeedback,
      isCompleted: this.isComp,
    };

    this.service.addSchedules(val).subscribe(res => {
      console.log(res.toString());
      alert(res.toString())
    });
  }


  updateSchedule() {
    var val = {
      ScheduleId: this.ScheduleId,
      ScheduleDate: this.ScheduleDate,
      Time: this.Time,
      TutorId: 1,
      isTutorConfirmed: this.isTutor,
      TutorFeedback: this.TutorFeedback,
      StudentId: this.StudentId,
      isStudentConfirmed: this.isStudent,
      StudentFeedback: this.StudentFeedback,
      isCompleted: this.isComp,
    };
    this.service.updateSchedules(val).subscribe(res => {
      alert(res.toString())
    });
  }


}
