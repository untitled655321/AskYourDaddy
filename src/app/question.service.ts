import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Question } from './question.model';
import "rxjs/Rx";


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

 private restUrl = 'https://leave-a-note-rest-api.herokuapp.com/';
  

  public getQuestions() {
    return this.http.get(this.restUrl + 'questions');
  }

  public deleteQuestion(question) {
    return this.http.delete(this.restUrl+'/questions/'+ question.id);
  }

  public createQuestion(question) {
    return this.http.post<Question>(this.restUrl+'/questions', question);
  }

  public getSpecyficQuestion(id:number){
    return this.http.get(this.restUrl + '/questions/' + id);

  }

  getRestUrl(){
    return this.restUrl;
  }
}
