import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';
import { AddQuestionComponent } from './add-question/add-question.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AnswerService } from './answer.service';
import { QuestionDetailsComponent } from './question/question-details/question-details.component';
import { AnswerComponent } from './question/question-details/answer/answer.component';

enableProdMode();

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'questions', component: QuestionComponent},
  {path: 'questions/:id', component: QuestionDetailsComponent},
  {path: 'add' ,component:AddQuestionComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AddQuestionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuestionDetailsComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  exports: [
    RouterModule
  ],
  providers: [QuestionService,AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
