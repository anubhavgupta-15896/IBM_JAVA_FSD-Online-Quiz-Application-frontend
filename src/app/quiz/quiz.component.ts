import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './quiz.service';
import { QuizSchedule } from './quizSchedule';
import { PostQuizDetail } from './quiz';
import { UserQuizHistory } from './userQuizHistoryModel';
import { Question } from './question';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { userData } from '../userdata';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit ,OnDestroy{

  quiz : any;
  quizId : any;
  userData:any;
  isAnswered : boolean =true;
  qnProgress : number = 0;
  selectedQues : boolean[] = [false,false,false];
  seconds: number = 0;
  timer:any;

  errorMessage:string="";
  outputQuiz:PostQuizDetail =new PostQuizDetail(0,"","",0,0,0,0,"");
  userQuizHistory:UserQuizHistory[] = [];
  quizSchedule:QuizSchedule = new QuizSchedule("",this.outputQuiz,"","",this.userQuizHistory);

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private quizService:QuizService,public datepipe: DatePipe) { }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  ngOnInit(): void {
    this.quizId=this.activatedRoute.snapshot.paramMap.get('quizId'); //get Quiz id from url
    this.getQuizById();
    this.userData = JSON.parse(localStorage.getItem('userDetail'));
    this.startTimer(); //start timer
  }

  public getQuizById():void{
    //this.quizService.getQuizById(parseInt(this.quizId)).subscribe(data=>(this.quiz = data),error=>(this.errorMessage=error)); //get quiz detail from backend server
    this.quizService.getQuizById(parseInt(this.quizId))
        .subscribe((data)=>
          {
            this.quiz = data;
            this.quizSchedule = this.prepareOutputModel();
            console.log(this.quizSchedule.quiz.durationInMinuites);
          }); //get quiz detail from backend server
  }

  //prepare output quizschedule object
  public prepareOutputModel() : QuizSchedule{
    this.outputQuiz = new PostQuizDetail(this.quiz.id,this.quiz.name,this.quiz.subject,this.quiz.numberofquestions,this.quiz.durationInMinuites,this.quiz.maxMarks,this.quiz.passingMarks,this.quiz.quizType);
    let i:number =0;
    for(let q of this.quiz.questions){
      this.userQuizHistory[i] = new UserQuizHistory(new Question(q.id,q.description,q.option1,q.option2,q.option3,q.answerOption,q.quizId),"");
      i++; 
    }
    return new QuizSchedule(this.userData.username,this.outputQuiz,this.datepipe.transform(new Date(),'yyyy-MM-dd'),this.datepipe.transform(new Date(),'HH:mm:ss'),this.userQuizHistory);
  }

  nextQuestion(optionForm:NgForm) {
    this.qnProgress++;
    optionForm.resetForm();
  }

  nextQuestionByPallet(index:number,optionForm:NgForm){
    this.qnProgress = index;
    optionForm.resetForm();
  }

  

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

   startTimer() {
    this.timer = setInterval(() => {
      this.seconds++;
      if(this.seconds > (this.quiz.durationInMinuites*60)){
        this.submitQuizToBackend();
        alert('Time Out!'); 
        clearInterval(this.timer);
      }
    }, 1000);
  }
  
  changeQuesPalletColorAndSaveAnswer(index:number,selectedOption:any){
    this.selectedQues[index] = true;
    this.userQuizHistory[this.qnProgress].optionSelected = selectedOption.option;
    // alert(this.userQuizHistory[this.qnProgress].optionSelected);
  }

  clearSubmittedOption(optionForm:NgForm){
    this. userQuizHistory[this.qnProgress].optionSelected = "";
    this.selectedQues[this.qnProgress] = false;
    optionForm.resetForm();
  }

  submitQuizToBackend(){
    this.quizService.submitQuiz(this.quizSchedule).subscribe();
    this.router.navigate(['/quiz/',this.quizId,'submit' ]);
  }

  submitTest(){
      if (confirm("Are you sure youwant to Submit?")) {  
        console.log(JSON.stringify(this.quizSchedule)); 
        this.submitQuizToBackend();
      } 
  }

}
