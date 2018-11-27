import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
question:Question = new Question();


  constructor(private router:Router,private questionService:QuestionService) { }

  ngOnInit() {
  }

  createQuestion(){
    this.questionService.createQuestion(this.question)
    .subscribe();
  }

}
