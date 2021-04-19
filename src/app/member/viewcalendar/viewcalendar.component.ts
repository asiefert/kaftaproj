import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-viewcalendar',
  templateUrl: './viewcalendar.component.html',
  styleUrls: ['./viewcalendar.component.css']
})
export class ViewcalendarComponent implements OnInit {
  constructor(private service: SharedService) { }

  calendarOptions: CalendarOptions;
  title!: string;
  dates!: any;

  // this need to call then convert to json
  ngOnInit(): void {
    this.title = "dayGridMonth";
    this.service.getTutorScheduleList(1).subscribe((data: any) => {

    });

    // var jsonArray = JSON.parse(this.dates);
    // console.log(jsonArray);

    // for (var i = 0; i < this.dates.length; i++) {
    //   var obj = this.dates[i];
    //   console.log(obj.id);
    // }

    this.dates = [
      { title: '9am - 10am', date: '2021-04-08' },
      { title: '1pm - 2pm', date: '2021-04-08' },

      { title: '9am - 10am', date: '2021-04-09' },
      { title: '1pm - 2pm', date: '2021-04-09' },

      { title: '9am - 10m', date: '2021-04-10' },
      { title: '10am - 11am', date: '2021-04-10' },
      { title: '2pm - 3pm', date: '2021-04-10' },
      { title: '2pm - 4pm', date: '2021-04-10' },

      { title: '2pm - 3pm', date: '2021-04-17' },
      { title: '2pm - 3pm', date: '2021-04-18' },
      { title: '2pm - 3pm', date: '2021-04-19' }
    ]


    this.calendarOptions = {
      initialView: this.title,
      events: this.dates
    }
  }

}
