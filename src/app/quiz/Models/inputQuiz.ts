import { Question } from '../question';

export class GetQuizDetail{
    public id:number;
    public name:string;
    public subject:string;
    public numberofquestions:number;
    public durationInMinuites:number;
    public maxMarks:number;
    public passingMarks:number;
    public quizType:string;
    public questions:Question[];
    public constructor(id:number, name:string, subject:string, numberofquestions:number, durationInMinuites:number, maxMarks:number, passingMarks:number, quizType:string,questions:Question[]){
        this.id = id;
        this.name=name;
        this.subject=subject;
        this.numberofquestions=numberofquestions;
        this.durationInMinuites=durationInMinuites;
        this.maxMarks = maxMarks;
        this.passingMarks = passingMarks;
        this.quizType = quizType;
        this.questions = questions;
    }
}