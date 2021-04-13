import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpStudentComponent } from './sign-up-student/sign-up-student.component';
import { SignUpTutorComponent } from './sign-up-tutor/sign-up-tutor.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MemberComponent } from './member/member.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FindTutorComponent } from './find-tutor/find-tutor.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';
import { MatchUsersComponent } from './match-users/match-users.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { TakeQuizComponent } from './quizzes/take-quiz/take-quiz.component';
import { EditComponent } from './edit/edit.component';

import { AuthGuard } from './auth.guard';
import { ResultsComponent } from './quizzes/take-quiz/results/results.component';
import { CreateQuizComponent } from './quizzes/create-quiz/create-quiz.component';

// import { ManagecalendarComponent } from './member/managecalendar/managecalendar.component';
// import { ViewcalendarComponent } from './member/viewcalendar/viewcalendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'find-tutor', component: FindTutorComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: SignInComponent },

  { path: 'register-student', component: SignUpStudentComponent },
  { path: 'register-tutor', component: SignUpTutorComponent },

  { path: 'member', component: MemberComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'match', component: MatchUsersComponent, canActivate: [AuthGuard] },
  { path: 'admin-edit', component: AdminEditComponent, canActivate: [AuthGuard] },
  { path: 'quizzes', component: QuizzesComponent, canActivate: [AuthGuard] },
  { path: 'quizzes/take/:id', component: TakeQuizComponent, canActivate: [AuthGuard] },
  { path: 'quizzes/results', component: ResultsComponent, canActivate: [AuthGuard] },
  { path: 'quizzes/create', component: CreateQuizComponent, canActivate: [AuthGuard] }
  // { path: 'managecalendar', component: ManagecalendarComponent },
  // { path: 'viewcalendar', component: ViewcalendarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
