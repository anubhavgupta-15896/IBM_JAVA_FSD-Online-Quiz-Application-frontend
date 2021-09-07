import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/map';

import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) {}

  public getQuiz(quizId: string): Observable<Quiz> {
    return this.httpClient.get('http://localhost:3000/quiz/{quizId}').pipe(
      map((quiz) => {
        return quiz as Quiz;
      })
    );
  }

  public getQuizListBySubject(subjectName: string): Observable<Quiz[]> {
    return this.httpClient
      .get('http://localhost:8087/quiz/subject/' + subjectName)
      .pipe(
        map((quiz) => {
          return quiz as Quiz[];
        })
      );
  }
}
