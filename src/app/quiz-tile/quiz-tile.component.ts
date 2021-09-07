import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'quiz-tile',
  templateUrl: './quiz-tile.component.html',
  styleUrls: ['./quiz-tile.component.scss'],
})
export class QuizTileComponent implements OnInit {
  
  

  constructor(public router:Router,public route:ActivatedRoute, public userService:UserService) {}
  @Input('quizItem') quizItem: any; 
  @Input('quizType') quizType:string;
  userData:any;
  ngOnInit(): void {
    
  }
  
  navigateToQuiz(){
    if(JSON.parse(localStorage.getItem('userDetail')) == null || JSON.parse(localStorage.getItem('userDetail')) == ""){
        alert("Login Required, For Attempting Quiz!! "+this.quizType);
    }else{
      if(this.quizType == "paid"){
        this.userData = JSON.parse(localStorage.getItem('userDetail'));
        if(this.userService.isSubscribe(this.userData)){
          this.router.navigate(["quiz",this.quizItem.id]);
        }else{
          alert("Please Buy Subscription Plan");
        }
      }else{
        this.router.navigate(["quiz",this.quizItem.id]);
      }
    }
    }
}
