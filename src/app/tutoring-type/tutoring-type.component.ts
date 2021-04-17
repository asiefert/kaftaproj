import {Component} from '@angular/core'; 

@Component({
  selector: 'app-tutoring-type',
  templateUrl: './tutoring-type.component.html',
  styleUrls: ['./tutoring-type.component.css']
})
export class TutoringTypeComponent {
  tutoringType: string;
  tutoringTypes: string[] = ['Lab/Homework Help', 'Exam Preparation', 'General Questions on Subject', 'Other'];
}

