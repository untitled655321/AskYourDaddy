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


const routes: Routes = [
  { path: 'questions', component: QuestionComponent },
  {path: 'add' ,component:AddQuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AddQuestionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  exports: [
    RouterModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
