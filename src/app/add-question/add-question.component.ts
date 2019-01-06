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
file:any;

  constructor(private router:Router,private questionService:QuestionService) { }

  ngOnInit() {
  }
  onChange(event) {
    this.file = event.srcElement.files;
    console.log(this.file[0]);
  }
  createQuestion(){
    this.questionService.createQuestion(this.question,this.file[0])
    .subscribe(data=>{
      console.log(data);
    });
  }

}
