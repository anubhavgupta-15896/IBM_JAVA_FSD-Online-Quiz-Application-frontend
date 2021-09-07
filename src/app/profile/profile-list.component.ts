import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profile',
  template: '',
})
export class ProfileListComponent implements OnInit {
  //username: any;
  ngOnInit(): void {
      //this.getProfileByName(this.username);
  }  
  profileService: any;
  profile: any;
  

  public getProfileByName(username:string):any {
    this.profileService.getProfileByName(username).subscribe((data: any)=>{this.profile=data});
  }
  }


