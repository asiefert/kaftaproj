import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInOptionsComponent } from './sign-in-options/sign-in-options.component';
import { SignInStudentComponent } from './sign-in-student/sign-in-student.component';
import { SignInTutorComponent } from './sign-in-tutor/sign-in-tutor.component';
import { SignUpStudentComponent } from './sign-up-student/sign-up-student.component';
import { SignUpTutorComponent } from './sign-up-tutor/sign-up-tutor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginoptions', component: SignInOptionsComponent },
  { path: 'studentlogin', component: SignInStudentComponent },
  { path: 'tutorlogin', component: SignInTutorComponent },
  { path: 'register-student', component: SignUpStudentComponent },
  { path: 'register-tutor', component: SignUpTutorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
