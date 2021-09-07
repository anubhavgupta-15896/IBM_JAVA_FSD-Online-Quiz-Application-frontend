    import { Question } from './question';


export class UserQuizHistory{
    public question:Question;
    public optionSelected:string;
    constructor(question:Question,optionSelected:string){
        this.question = question;
        this.optionSelected = optionSelected;
    }
}
