import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Question } from './question.model';
import "rxjs/Rx";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient,private router:Router) { }

 private restUrl = 'https://zuul-server-ask-your-daddy.herokuapp.com/post';
  

  public getQuestions() {
    return this.http.get(this.restUrl + '/questions');
  }

  public deleteQuestion(question) {
    return this.http.delete(this.restUrl+'/questions/'+ question.id);
  }

  public createQuestion(question,file) {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('title', question.title);
    formdata.append('description', question.description);
    return this.http.post<Question>(this.restUrl+'/questions', formdata);
  }

  public getSpecyficQuestion(id:number){
    return this.http.get(this.restUrl + '/questions/' + id);

  }

  getRestUrl(){
    return this.restUrl;
  }
}
