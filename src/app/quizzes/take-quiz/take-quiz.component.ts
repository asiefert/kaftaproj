import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute, private quizService: QuizService ) { }
  QuizData: any = [];
  score: number = 0;
  percentScore: number;
  ngOnInit(): void {
    this.refreshQuizData(this.route.snapshot.paramMap.get('id'));
  }

  refreshQuizData(id:any) {
    this.service.getQuiz(id).subscribe(data => {
      this.QuizData = data;
      this.quizService.QuizData = this.QuizData;
    })
  }

  //Add to score if the correct button is clicked, otherwise take away 1, or set to 0 if score is already 0
  addToScore(event:any) {
    if (event.target.checked && this.score >= 0) {
      this.score++;
      console.log(this.score);
    } else if (this.score === 0 || this.score <= 0){
      this.score = 0;
    }
    else {
      this.score--;
    }
  }
  //Check if an answer is correct and only add to the score if it is correct
  checkIsCorrect(event:any,answer:any) {
    if (answer.correct === true) {
      this.addToScore(event)
    }
  }

  //Check score and send to quiz service to share with results page
  checkScore(score:number, numQuestions:number) {
    this.percentScore = (score/numQuestions) * 100;
    this.quizService.score = this.score;
    this.quizService.percentScore = this.percentScore;
  }

}
