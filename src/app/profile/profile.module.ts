import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
//import { Profile } from './profile';
import {CommonModule} from '@angular/common';
import { ProfileService } from './profile-service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileListComponent } from './profile-list.component';
@NgModule({
  declarations: [ProfileComponent,ProfileListComponent],
  imports: [CommonModule , HttpClientModule],
  providers: [ProfileService],
  exports: [ProfileComponent]
})
export class ProfileModule { 

}
