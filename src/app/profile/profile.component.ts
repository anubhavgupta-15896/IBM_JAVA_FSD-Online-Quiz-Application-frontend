import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './profile-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProfileListComponent } from './profile-list.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username :any;

  constructor(private profileService:ProfileService,private activatedRoute:ActivatedRoute){
    this.username = JSON.parse(localStorage.getItem('userDetail')).username;
  }

  
  ngOnInit(): void {
    
      this.getProfileByName(this.username);
  }  
 //profileService: any;
  profile: any;
  

  public getProfileByName(username:string):any {
    this.profileService.getProfileByName(username).subscribe((data:any)=>{this.profile=data;console.log(this.profile.username,this.profile.firstName,this.profile.lastName)});
    //this.profileService.getProfileByName(username).subscribe((data:any)=>{this.profile=data});
  }
  

  /*public getProfileByName(username:string):any {
    this.profileService.getProfileByName(username).subscribe(data=>{this.profile=data});
  }*/
  }




  /*profile : any; 
  username:any;
  public constructor(private activatedRoute:ActivatedRoute,private router:Router,private profileService:ProfileService){}
  ngOnInit(){
    
      console.log(this.profile);
      //this.username=this.activatedRoute.snapshot.paramMap.get('username');
    

  }*/


