import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  constructor(private http: HttpClient) {}
  private getAllNoteBooksURL = '';

  getAllNoteBooks(): Observable<any> {
    return this.http.get(this.getAllNoteBooksURL);
  }
}
