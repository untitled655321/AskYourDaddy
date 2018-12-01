import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from 'src/app/answer.service';
import "rxjs/Rx";
import { QuestionComponent } from '../question.component';
import { Question } from 'src/app/question.model';
import { QuestionService } from 'src/app/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  
 question:any;
 question_id:number;
 answers:any;

  constructor(private route: ActivatedRoute,
    private answerService:AnswerService,private questionService:QuestionService) { 

    }

  ngOnInit() {
    this.route.params.subscribe(params => this.question_id = params.id);

    this.questionService.getSpecyficQuestion(this.question_id).subscribe((data)=> {
      this.question=data;
      this.answerService.getAnsweres(this.question).subscribe(dataa => this.answers = dataa);
    });
    
  }
 
  
}
