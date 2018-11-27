import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import "rxjs/Rx";
import { QuestionResponse } from '../questionResponse.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: any;
  

  constructor(private router: Router, private questionService: QuestionService) {

  }

  ngOnInit() {
    this.questionService.getQuestions()
      .subscribe((data:QuestionResponse) => {
        this.questions = data.content;
        console.log(data.content);
      });
  }

  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question)
      .subscribe(data => {
        this.questions = this.questions.filter(u => u !== question);
      })
  };
}
