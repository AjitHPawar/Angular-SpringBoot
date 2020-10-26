import { Component, OnInit } from '@angular/core';
import { Notebook } from 'src/app/models/notebook';
import { NotebookService } from 'src/app/services/notebook.service';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.css'],
})
export class NoteBookComponent implements OnInit {
  notebook = new Notebook(0, 'Angular', 0);
  allNotebooks: Notebook[] = [];
  constructor(private notebookService: NotebookService) {}

  ngOnInit(): void {}
  getAllNoteBooks() {
    this.notebookService.getAllNoteBooks().subscribe(
      (data) => {
        this.allNotebooks = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createNoteBook() {
    this.notebook = new Notebook(11, 'JAVA', 10);
    this.allNotebooks.push(this.notebook);
  }
}
