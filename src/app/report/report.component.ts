import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from "./report.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    // subject: string;
    // quiz_title:string;
    report : any[] = [];
    sum:any;
    correct : any = 0;
    result:any;
    correctPercentage: any;
    pass : any = 40;
    scheduleId : any ;
    userName : any ;
    subject : any;
    quizTitle : any;

    constructor(private reportservice : ReportService, private activatedRoute:ActivatedRoute) {

        // console.log("Before : "+this.scheduleId,this.userName);

        // this.activatedRoute.queryParams.subscribe(params => {this.scheduleId = params['scheduleId'];});
        this.scheduleId = this.activatedRoute.snapshot.paramMap.get('scheduleId');
        // this.activatedRoute.queryParams.subscribe(params => {this.userName = params['userName'];});
        this.userName = this.activatedRoute.snapshot.paramMap.get('userName');
        this.subject = this.activatedRoute.snapshot.paramMap.get('subject');
        this.quizTitle = this.activatedRoute.snapshot.paramMap.get('quizTitle');
        
        // console.log("After : "+this.scheduleId,this.userName,this.subject,this.quizTitle);

        this.getByUserNameAndScheduleId(this.scheduleId,this.userName);
        
        
        // this.subject = 'JSE8';
        // this.quiz_title = 'My Quizs';
      }

    public getByUserNameAndScheduleId(scheduleId : number, userName : string) : any
    {
        // console.log("atlast"+scheduleId,userName);
        
        // return this.reportservice.getByUsenameAndSCheduleId(scheduleId,userName).subscribe(data=>{this.report=data})
        // this.reportservice.getByUsenameAndSCheduleId(scheduleId,userName).subscribe(data=>{this.report=JSON.parse(JSON.stringify(data));console.log("inside"+this.report)});
        this.reportservice.getByUsenameAndSCheduleId(scheduleId,userName).subscribe(data=>{this.report=data;this.operation()});
    }

    public operation() : any
    {
        this.sum = this.report.length;
        for(let r of this.report)
        {   
           r.result == 1 ? this.correct++ : this.correct;
        }
       
        const percentage = (this.correct/this.sum)*100;
        if(percentage > this.pass){
              this.result = 'Pass';
        }else{
            this.result = 'Fail';
        }
    }

    ngOnInit(){
      
   }

}
