import { PostQuizDetail } from './quiz';
import { UserQuizHistory } from './userQuizHistoryModel';

export class QuizSchedule
{
    public userName:string;
    public quiz:PostQuizDetail;
    public quizDate:any;
    public quizTime:any;
    public userQuizAnswerList:UserQuizHistory[]; 
    public constructor(userName:string,quiz:PostQuizDetail,quizDate:any,quizTime:any,userQuizAnswerList:UserQuizHistory[]){
        this.userName = userName;
        this.quiz = quiz;
        this.quizDate = quizDate;
        this.quizTime = quizTime;
        this.userQuizAnswerList = userQuizAnswerList;
    }
}