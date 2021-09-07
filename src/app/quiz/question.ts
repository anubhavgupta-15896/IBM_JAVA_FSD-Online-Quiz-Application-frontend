
export class Question{
    public id:number;
    public description:string;
    public option1:string;
    public option2:string;
    public option3:string;
    public answerOption:string;
    public quizId:number;
    public constructor(id:number,description:string,option1:string,option2:string,option3:string,answerOption:string,quizId:number){
        this.id = id;
        this.description = description;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.answerOption = answerOption;
        this.quizId = quizId;
    }
}
