
export class PostQuizDetail{
    public id:number;
    public name:string;
    public subject:string;
    public numberofquestions:number
    public durationInMinuites:number;
    public maxMarks:number;
    public passingMarks:number;
    public quizType:string;
    constructor(id:number,name:string,subject:string,numberofquestion:number,durationInMinuites:number,maxMarks:number,passingMarks:number,quizType:string){
        this.id=id;
        this.name = name;
        this.subject = subject;
        this.numberofquestions = numberofquestion;
        this.durationInMinuites = durationInMinuites;
        this.maxMarks = maxMarks;
        this.passingMarks = passingMarks;
        this.quizType = quizType;
    }
}

