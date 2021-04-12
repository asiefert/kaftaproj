import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  //Placeholder text for the Quiz creator
  textVal: string = `{
    "quiz_name":"Quiz Template",
    "topic":"No Topic Set",
    "questions":[
       {
          "title":"Question 1",
          "answers":[
             {
                "title":"Answer 1",
                "correct":true
             },
             {
                "title":"Answer 2",
                "correct":false
             },
             {
                "title":"Answer 3",
                "correct":false
             }
          ]
       },
       {
          "title":"Question 2",
          "answers":[
             {
                "title":"Answer 1",
                "correct":true
             },
             {
                "title":"Answer 2",
                "correct":false
             }
          ]
       }
    ]
 }`;
  QuizData: any = [];
  error: string;
  constructor(private service: SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  //Validate the data before sending it off
  validate(data: any) {
    let tempValidationObj = JSON.parse(data);
    try {
      this.QuizData = data;
      if (tempValidationObj.questions === undefined || tempValidationObj.questions.length < 2) {
        this.error = "Not enough questions";
      } else {
        this.service.uploadQuiz(this.QuizData).subscribe(data => {
          this.router.navigate(['/quizzes'])
        })
      }
    } catch (e) {
      this.error = e;
    }
  }
}
