import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpStudentComponent } from './sign-up-student/sign-up-student.component';
import { SignUpTutorComponent } from './sign-up-tutor/sign-up-tutor.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignInOptionsComponent } from './sign-in-options/sign-in-options.component';
import { SignInStudentComponent } from './sign-in-student/sign-in-student.component';
import { SignInTutorComponent } from './sign-in-tutor/sign-in-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpStudentComponent,
    SignUpTutorComponent,
    HomeComponent,
    FooterComponent,
    SignInOptionsComponent,
    SignInStudentComponent,
    SignInTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
