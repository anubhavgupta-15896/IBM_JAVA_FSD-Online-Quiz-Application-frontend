import {Component ,OnInit } from '@angular/core';
import { PlansListService } from './plans-list.service';
import { Plans } from './plans';
import { Subscription } from '../models/subscription';
import { UserService } from '../services/user.service';
@Component({
    selector: 'plans-list',
    templateUrl:'./plans-list.component.html',
    styleUrls: ['./plans-list.component.css']
})

export class PlansListComponent implements OnInit{

    plansList : any;
    subscription:Subscription;
    subscriptionStartDate:any;
    subscriptionEndDate:any;
    userData:any;
    //plans:Plans = new Plans(0,"",0,0);
    
       
    public constructor(private plansListService:PlansListService, private userService:UserService){}
    ngOnInit(){
        this.showAllPlans();
        console.log(this.plansList);
        this.invokeStripe();
    


    }

    public showAllPlans() : void
    {
        this.plansListService.getPlansList().subscribe(data=>(this.plansList=data));
    }

    public deletePlanById(planId:number) : void{
        this.plansListService.deletePlanById(planId).subscribe();
    }
    public insertProduct(planId:number,planName:string, validityInDays:number,planAmount:number) : void{
        this.plansListService.insertPlan(new Plans (planId,planName,validityInDays,planAmount)).subscribe();
    }

    public modifyProduct(planId:number,planName:string,  validityInDays:number,planAmount:number) : void{
        this.plansListService.modifyPlan(new Plans(planId,planName,validityInDays,planAmount)).subscribe();
    }

    makePayment(plan:Plans) {
        const paymentHandler = (<any>window).StripeCheckout.configure({
          key:
            'pk_test_51JRhqSSDNCTLDtChu6CjS0BQPoNlhE8b8ePEpGdGNOY6wYEqI8s9bGOhaMxk3xfxM3SGXDXglaJvTfHwPjh0ZSH700mB8qszci',
            
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken.card);
            
            alert('Payment has been done!');
          },
        });
    
        paymentHandler.open({
          name: 'Online Quiz',
          description: '',
        });
      }
      invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
          const script = window.document.createElement('script');
          script.id = 'stripe-script';
          script.type = 'text/javascript';
          script.src = 'https://checkout.stripe.com/checkout.js';
          window.document.body.appendChild(script);
        }
        
      }


    }

