import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedBackService {
  constructor(private http: HttpClient) {}

  sendFeedback(data: Object): Observable<any> {
    let url = 'http://localhost:8080/email/feedback';
    return this.http.post(url, data);
  }
}
