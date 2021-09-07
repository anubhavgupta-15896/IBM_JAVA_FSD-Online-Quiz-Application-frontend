import { NgModule } from '@angular/core';
import { PlansListComponent } from './plans-list.component';
//import { PlansComponent } from './plans.component';
import {CommonModule} from '@angular/common';
import { PlansListService } from './plans-list.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [PlansListComponent],
  imports: [CommonModule , HttpClientModule],
  providers: [PlansListService],
  exports: [PlansListComponent]
})
export class PlansModule { 

}