import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  QuizData: any = []
  score:number;
  percentScore: number;
  
  constructor() { }

  getScore() {
    return this.score;
  }

  getPercentScore() {
    return this.percentScore;
  }

  getQuizData() {
    return this.QuizData;
  }
}
