import { Profile } from './profile';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})
export class ProfileService
{
    public constructor(private httpClient:HttpClient){}
    public getProfileByName(username:string) : Observable<Profile>
    {
        return this.httpClient.get<any>('http://localhost:8088/user/'+username);
    }
    }
    


