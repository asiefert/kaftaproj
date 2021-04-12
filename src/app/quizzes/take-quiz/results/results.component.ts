import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  score:number;
  percentScore:number;
  quizData:any = [];
  constructor(public service:QuizService, private router:Router) { }

  ngOnInit(): void {
    //Retrieve scores from the quiz service
    this.percentScore = this.service.getPercentScore();
    this.score = this.service.getScore();

    //Prevents people from navigating to this page without finishing a quiz. Can be changed
    if (this.percentScore === undefined) {
      this.router.navigate(['/'])
    }

    //Receive quiz data passed along by the quiz service
    this.quizData = this.service.getQuizData();
  }

}
