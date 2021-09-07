export class Profile
{
  username:string;
  firstName:string;
  lastName:string;
  emailId:string;
  mobileNo:number;
  
  constructor(username:string,firstName:string,lastName:string,emailId:string,mobile:number)
  {
    this.username=username;
    this.firstName=firstName;
    this.lastName=lastName;
    this.emailId=emailId;
    this.mobileNo=mobile;
  }
}