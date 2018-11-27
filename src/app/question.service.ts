import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public deleteUser(user) {
    return this.http.delete(this.restUrl + "/" + user.id);
  }

  public createUser(user) {
    return this.http.post<Question>(this.restUrl, user);
  }
}
