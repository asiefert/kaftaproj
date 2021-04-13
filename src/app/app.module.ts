import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpStudentComponent } from './sign-up-student/sign-up-student.component';
import { SignUpTutorComponent } from './sign-up-tutor/sign-up-tutor.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MemberComponent } from './member/member.component';
import { ShowallmembersComponent } from './member/showallmembers/showallmembers.component';
import { SharedService } from './shared/shared.service';

import { AuthService } from './shared/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MatchUsersComponent } from './match-users/match-users.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { EditComponent } from './edit/edit.component';
import { ViewcalendarComponent } from './member/viewcalendar/viewcalendar.component';
import { ManagecalendarComponent } from './member/managecalendar/managecalendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FindTutorComponent } from './find-tutor/find-tutor.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { TakeQuizComponent } from './quizzes/take-quiz/take-quiz.component';
import { ResultsComponent } from './quizzes/take-quiz/results/results.component';
import { CreateQuizComponent } from './quizzes/create-quiz/create-quiz.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from './contact.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpStudentComponent,
    SignUpTutorComponent,
    HomeComponent,
    FooterComponent,
    SignInComponent,
    MemberComponent,
    ShowallmembersComponent,
    AboutUsComponent,
    ContactComponent,
    MatchUsersComponent,
    AdminEditComponent,
    EditComponent,
    ViewcalendarComponent,
    ManagecalendarComponent,
    SignUpComponent,
    FindTutorComponent,
    QuizzesComponent,
    TakeQuizComponent,
    ResultsComponent,
    CreateQuizComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [SharedService, AuthService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
