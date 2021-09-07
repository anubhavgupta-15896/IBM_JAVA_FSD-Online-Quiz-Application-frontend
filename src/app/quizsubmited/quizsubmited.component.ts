import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizsubmited',
  templateUrl: './quizsubmited.component.html',
  styleUrls: ['./quizsubmited.component.css']
})
export class QuizsubmitedComponent implements OnInit {
  quizId:any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.paramMap.get('quizId');
  }

  showResult(){
    this.router.navigate(['myQuizes'])
  }

}
