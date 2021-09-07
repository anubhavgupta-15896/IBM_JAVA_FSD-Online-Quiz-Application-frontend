export class Plans
{
  planId:number;
  planName:string;
  validityInDays:number;
  planAmount:number;
  constructor(planId:number,planName:string,validityInDays:number,planAmount:number)
  {
    this.planId=planId;
    this.planName=planName;
    this.validityInDays=validityInDays;
    this.planAmount=planAmount;
  }
}