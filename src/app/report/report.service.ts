import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

    public getByUsename(userName : string) : Observable<any>
    {
        return this.http.get('http://localhost:8081/myquiz/'+userName);
    }

    public getByUsenameAndSCheduleId(scheduleId : number,userName : string) : Observable<any>
    {
        return this.http.get<any>('http://localhost:8081/'+scheduleId+'/'+userName);
    }
}
