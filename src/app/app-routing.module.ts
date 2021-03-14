import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpStudentComponent } from './sign-up-student/sign-up-student.component';
import { SignUpTutorComponent } from './sign-up-tutor/sign-up-tutor.component';
import { MemberComponent } from './member/member.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MatchUsersComponent } from './match-users/match-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register-student', component: SignUpStudentComponent },
  { path: 'register-tutor', component: SignUpTutorComponent },
  { path: 'member', component: MemberComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'match', component: MatchUsersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
