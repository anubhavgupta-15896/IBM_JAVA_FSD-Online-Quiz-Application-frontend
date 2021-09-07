import { Plans } from './plans';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})
export class PlansListService
{
    public constructor(private httpClient:HttpClient){}
    public getPlansList() :Observable<Plans[]>
    {
        return this.httpClient.get<Plans[]>('http://localhost:8084/plans');
    }

    public getPlanById(planId:number) : Observable<Plans>
    {
        return this.httpClient.get<Plans>('http://localhost:8084/'+planId);
    }
    public deletePlanById(planId:number)
    {
        return this.httpClient.delete('http://localhost:8084/'+planId);
    }

    public insertPlan(plans:Plans){
        return this.httpClient.post('http://localhost:8084/',plans);
    }

    public modifyPlan(plans:Plans){
        return this.httpClient.put('http://localhost:8084/',plans);
    }
    
}

