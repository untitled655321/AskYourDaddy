import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import "rxjs/Rx";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[];

  constructor(private router: Router, private userService: QuestionService) {

  }

  ngOnInit() {
    this.userService.getQuestions()
      .subscribe((data:Response) => {
        //this.questions = data;
        console.log(data);
      });
  };

  // deleteUser(user: User): void {
  //   this.userService.deleteUser(user)
  //     .subscribe(data => {
  //       this.users = this.users.filter(u => u !== user);
  //     })
  // };
}
