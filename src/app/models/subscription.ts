import { Plans } from "../plans/plans";
import { PlansListComponent } from "../plans/plans-list.component";

export class Subscription {
    public subscriptionId: number;
    public username: String;
    public subscriptionStartDate: String;
    public subscriptionEndDate: String;
    public transactionId: number;
    public plan:Plans;
    public constructor(username: String, subscriptionStartDate: String, subscriptionEndDate: String, transactionId: number, plan:Plans){

        this.username = username;
        this.subscriptionStartDate = subscriptionStartDate;
        this.subscriptionEndDate = subscriptionEndDate;
        this.transactionId = transactionId;
        this.plan = plan;
    }
  }