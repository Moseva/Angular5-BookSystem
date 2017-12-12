import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Book, BookService} from '../book.service'
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
    private book:Observable<Book>;
    private tags = ['FICTION', 'RELIGION & SPIRITUALITY', 'SCIENCE & TECHNOLOGIES'];

    constructor(private routeInfo:ActivatedRoute, private bookService:BookService, private router:Router) {
    }

    ngOnInit() {
        let bookId = this.routeInfo.snapshot.params['id'];
        this.bookService.getBook(bookId).subscribe(data=>this.book = data);
    }

    cancel() {
        this.router.navigateByUrl('/book');
    }





    save() {
        if (!this.book['id']) {
            this.book['id'] = this.bookService.getBooks()['length'] + 1;
            //this.bookService.createBook(this.book);
        }
        console.log(this.book['link']);
        this.router.navigateByUrl('/book');
    }

    hasTag(tag) {
        return this.book['tags'].includes(tag);
    }

    tagChange(tag) {
        var tagIndex = this.book['tags'].findIndex(function (value, index, arr) {
            return value === tag;
        });
        if (tagIndex > -1) {
            this.book['tags'].splice(tagIndex, 1);
        } else {
            this.book['tags'].push(tag);
        }
    }


}
