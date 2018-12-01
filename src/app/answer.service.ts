import { Injectable } from "@angular/core";
import { QuestionService } from "./question.service";
import { HttpClient} from '@angular/common/http';
import { Question } from "./question.model";
import "rxjs/Rx";


@Injectable({
    providedIn: 'root'
})
export class AnswerService{

    constructor(private http: HttpClient,private questionService:QuestionService){}

    getAnsweres(question:Question){
        return this.http.get(this.questionService.getRestUrl());
    }



}