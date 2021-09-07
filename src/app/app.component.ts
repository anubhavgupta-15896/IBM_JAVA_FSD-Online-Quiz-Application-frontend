import { Component, ViewEncapsulation } from '@angular/core';
import { SubjectService } from './services/subject.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  loginModalStyle="none";
    regModalStyle="none";
    regUserStatus:string="";
    loginUserStatus:string="";
    loginStatus = "none";
    username : string = "";
    userData : any;
    successMessage : string = '';
    errorMessage : string = '';
    regSuccessMessage : string = '';
    regErrorMessage : string = '';
    subjectList : string[];
    uname:string = '';
    pwd:string = '';
    uid:string = '';
    regpwd:string='';
    fname:string ='';
    lname:string='';
    mobile:string='';
    email:string='';
  
    constructor(private userService:UserService,public router : Router,private subjectService: SubjectService){ }
    
    ngOnInit(): void {
      this.subjectService.getSubjects().subscribe((subjects: string[]) => {
        this.subjectList = subjects;
      });
      if(JSON.parse(localStorage.getItem('userDetail')) != null){
        this.userData = JSON.parse(localStorage.getItem('userDetail'));
        this.loginStatus = "OK";
      }
    }
  
     openLoginModal()
     {
         this.loginModalStyle="block";
     }
    closeLoginModal()
     {
         this.loginModalStyle="none";
     }
     openUserRegModal()
     {
         this.regModalStyle="block";
     }
     closeUserRegModal()
     {
         this.regModalStyle="none";
     }
     userLogin() : void
     { 
         
         console.log("username ="+this.uname);
         console.log("password ="+this.pwd);
         this.userService.authenticateUser(this.uname,this.pwd).subscribe(
           (response)=>
            {
              this.loginStatus=response;
              this.userAuthenticate();
              this.loginMessage();
            },
            (error)=>{
              console.log("Exception Occured");
            }
            ); 
             
     }

     UserLogout()
     {
       localStorage.removeItem('userDetail');
         this.loginStatus = "none";
         this.userData = null;
         window.location.href="/";
     }

     userAuthenticate()
     {
        if(this.loginStatus == "OK")
        {
            this.loginStatus = "OK";
            this.userService.getUserDetails(this.uname).subscribe((data)=>{this.userData=data;localStorage.setItem("userDetail",JSON.stringify(data));console.log("Hello"+localStorage.getItem("userDetail"));});
        }
        console.log("IN METHOD END : "+this.loginStatus);
     }
     
     registerUser()
     { 
         if(this.uid == '' || this.regpwd == '' || this.fname == '' || this.mobile == '' || this.email == ''){
          this.registrationMessage();
         }else{
         let user:User = new User(this.uid,this.regpwd,this.fname,this.lname,this.email,parseInt(this.mobile));
         this.userService.registerUser(user).subscribe((response)=>{this.regUserStatus=response;this.registrationMessage();});
         
        }
      }
     registrationMessage(){
       if(this.regUserStatus == 'OK'){
         this.regSuccessMessage = "Registration Successful.";
       }
       else{
        this.regErrorMessage = "Registration Failed."
       }
     }
     loginMessage(){
      if(this.loginStatus == 'OK'){
        this.loginModalStyle="none";
      }
      else{
       this.errorMessage = "Invalid Credential."
      }
    }
    getQuizListBySubject(subject:string){
      this.successMessage = '';
      this.errorMessage = '';
        this.router.navigate(['quizbysubject',subject]);
     }
     getPreparationMaterial(){
      this.router.navigate(['preparationMaterial']);
     }
     getPlans(){
      this.router.navigate(['plans-list']);
     }
     getForum(){
       console.log("Hello");
      this.router.navigate(['discussionForum']);
     }
}
