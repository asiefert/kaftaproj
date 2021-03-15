import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-viewcalendar',
  templateUrl: './viewcalendar.component.html',
  styleUrls: ['./viewcalendar.component.css']
})
export class ViewcalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [

      { title: '9am - 10am', date: '2021-03-08' },
      { title: '1pm - 2pm', date: '2021-03-08' },

      { title: '9am - 10am', date: '2021-03-09' },
      { title: '1pm - 2pm', date: '2021-03-09' },

      { title: '9am - 10m', date: '2021-03-10' },
      { title: '10am - 11am', date: '2021-03-10' },
      { title: '2pm - 3pm', date: '2021-03-10' },
      { title: '2pm - 4pm', date: '2021-03-10' },

      { title: '2pm - 3pm', date: '2021-03-17' },
      { title: '2pm - 3pm', date: '2021-03-18' },
      { title: '2pm - 3pm', date: '2021-03-19' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
