import { Component, OnInit, Input } from '@angular/core';
import { QuestionDetailsComponent } from '../question-details.component';
import { AnswerService } from 'src/app/answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {


  @Input() answer;
  constructor(private question_detail:QuestionDetailsComponent,
    private answerService:AnswerService) { }

  ngOnInit() {
  }

}
