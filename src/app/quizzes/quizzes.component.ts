import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: SharedService) { }

  QuizList: any = [];
  ngOnInit(): void {
    this.refreshQuizzesList();
  }

  refreshQuizzesList() {
    this.service.getAvailableQuizzes().subscribe(data => {
      this.QuizList = data;
      console.log(data);
    });
  }

  deleteQuizFromList(id:any) {
    this.service.deleteQuiz(id).subscribe(data => {
      this.refreshQuizzesList()
    })
  }
}
