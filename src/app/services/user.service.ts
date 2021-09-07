import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Subscription } from '../models/subscription';


@Injectable({
  providedIn:'root'
})
export class UserService implements OnInit
{
     minDate:any;
     maxDate:any;
     currentDate:any;
    constructor(private httpClient:HttpClient){}
     ngOnInit(): void {
          
     }
    public authenticateUser(username:string,password:string) : Observable<any>
    {
         return this.httpClient.get<any>('http://localhost:8083/username/'+username+'/password/'+password);  
    }

    public registerUser(user:User) : Observable<any>
    {
         return this.httpClient.post<any>('http://localhost:8088/user',user);
    }

    public getUserDetails(userName:string) : Observable<any>
    {
         return this.httpClient.get<any>('http://localhost:8088/user/'+userName);
    }

    public subscribeUser(subscription:Subscription){
         return this.httpClient.post<any>('http://localhost:8088/user/subscribe',subscription);
    }

    public isSubscribe(userData:any) : boolean{
         this.currentDate = new Date();
     
         console.log(this.currentDate);
         for(let subscriptionDetail of userData.subscriptions){
          this.minDate = new Date(subscriptionDetail.subscriptionStartDate);
          this.maxDate = new Date(subscriptionDetail.subscriptionEndDate);
          console.log(this.minDate+" "+ this.maxDate+"  "+this.currentDate);
          console.log(this.minDate.getTime() +" "+ this.maxDate.getTime()+"  "+this.currentDate.getTime());
          console.log(this.currentDate.getTime() >= this.minDate.getTime() && this.currentDate.getTime() <= this.maxDate.getTime());
          if(this.currentDate.getTime() >= this.minDate.getTime() && this.currentDate.getTime() <= this.maxDate.getTime()){
               return true;
          }
         }
         return false;
    }

}