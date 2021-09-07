import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private httpClient: HttpClient) {}


  public getSubjects(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8087/quiz/subjects');
  }
}
