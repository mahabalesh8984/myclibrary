import { Component, OnInit } from '@angular/core';
import { LibraryService,Book } from '../services/library.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers:[LibraryService]
})
export class MembersComponent implements OnInit {
  

  books: Book[];
  constructor(private http: HttpClient, private liservice: LibraryService) { }

  ngOnInit(): void {
    this.liservice.getBooks().
    then(books => this.books = books);
  }

}
