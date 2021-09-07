import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { QuizListContainerComponent } from './quiz-list-container/quiz-list-container.component';
import { QuizTileComponent } from './quiz-tile/quiz-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';

import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuizComponent } from './quiz/quiz.component';
import { DatePipe } from '@angular/common';
import { QuizService } from './quiz/quiz.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from "@angular/material/input";
import { ReportComponent } from './report/report.component';
import { QuizsubmitedComponent } from './quizsubmited/quizsubmited.component';
import { MyQuizesComponent } from './my-quizes/my-quizes.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { PreparationMaterialComponent } from './preparation-material/preparation-material.component';
import { DiscussionForumThreadComponent } from './discussion-forum/discussion-forum-thread/discussion-forum-thread.component';
import { DiscussionForumCURDComponent } from './discussion-forum/discussion-forum-curd/discussion-forum-curd.component';
import { ReportService } from './report/report.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { PlansModule } from './plans/plans.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    //Material
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
    ],
  imports: [BrowserAnimationsModule],
  declarations: [
    HomeComponent
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    QuizListContainerComponent,
    QuizTileComponent,
    MenuItemComponent,
    QuizComponent,
    ReportComponent,
    QuizsubmitedComponent,
    MyQuizesComponent,
    DiscussionForumComponent,
    PreparationMaterialComponent,
    DiscussionForumThreadComponent,
    DiscussionForumCURDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,PlansModule,ProfileModule
  ],
  providers: [QuizService,DatePipe,ReportService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
