import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListContainerComponent } from './quiz-list-container/quiz-list-container.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReportComponent } from './report/report.component';
import { QuizsubmitedComponent } from './quizsubmited/quizsubmited.component';
import { MyQuizesComponent } from './my-quizes/my-quizes.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { PreparationMaterialComponent } from './preparation-material/preparation-material.component';
import { HomeComponent } from './home/home.component';
import { PlansListComponent } from './plans/plans-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component: HomeComponent, pathMatch: 'full'},
  { path: 'QuizList',component: QuizListContainerComponent, pathMatch: 'full'},
  { path: 'quizbysubject/:subject', component: QuizListContainerComponent , pathMatch: 'full'},
  { path : 'quiz/:quizId',component: QuizComponent},
  { path: 'report/:scheduleId/:userName/:subject/:quizTitle', component: ReportComponent },
  { path: 'quiz/:quiz/submit', component: QuizsubmitedComponent },
  { path: 'myQuizes', component: MyQuizesComponent},
  { path: 'discussionForum', component: DiscussionForumComponent},
  { path: 'preparationMaterial', component: PreparationMaterialComponent },
  { path: 'my-profile',component : ProfileComponent},
  { path: 'plans-list',component : PlansListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
