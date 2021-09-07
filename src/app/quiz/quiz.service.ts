import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GetQuizDetail } from './Models/inputQuiz';
import { QuizSchedule } from './quizSchedule';

@Injectable()
export class QuizService
{
    public constructor(private httpClient:HttpClient){}

    public getQuizById(quizId:number) : Observable<GetQuizDetail>
    {
        return this.httpClient.get<GetQuizDetail>('http://localhost:8087/quiz/'+quizId);
        //return this.httpClient.get<GetQuizDetail>("assets/json/quizdata.json").pipe(catchError(this.errorHandler));
    }

    public submitQuiz(quizSchedule:QuizSchedule){
        return this.httpClient.put('http://localhost:8087/quiz/submit',quizSchedule);
    }
}