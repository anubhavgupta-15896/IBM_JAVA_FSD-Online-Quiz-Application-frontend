import { quiz_type } from './quiztype';
export class Quiz {
  public id: number = 0;
  public name: String = '';
  public subject: String = '';
  public numberofquestions: number = 0;
  public durationInMinuites: number = 0;
  public maxMarks: number = 0;
  public passingMarks: number = 0;
  public quizType: quiz_type = quiz_type.free;
}
