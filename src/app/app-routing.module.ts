import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpTutorComponent } from './sign-up-tutor/sign-up-tutor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: SignUpTutorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
