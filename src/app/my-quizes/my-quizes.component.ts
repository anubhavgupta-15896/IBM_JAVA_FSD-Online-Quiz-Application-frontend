import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report/report.service';

@Component({
  selector: 'app-my-quizes',
  templateUrl: './my-quizes.component.html',
  styleUrls: ['./my-quizes.component.css']
})
export class MyQuizesComponent implements OnInit {

  title : string;
  quizes : any = [];
  userName : string = JSON.parse(localStorage.getItem('userDetail')).username;

  constructor(public router : Router, private reportservice : ReportService, private route: ActivatedRoute) {
    this.title = 'My Quizs';
    this.getByUsername(this.userName);
  }

  public getByUsername(userName : string) : void
  {
    this.reportservice.getByUsename(userName).subscribe(data=>{this.quizes=data})
  }


  public showReport( scheduleId : number, userName : string , subject : string , quizTitle : string)
  {
    this.router.navigate(['report',scheduleId,userName,subject,quizTitle]);
  }

  ngOnInit(): void {
  }

}
