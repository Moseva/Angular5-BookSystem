import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {Book, BookService} from "../book.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";


@Component({
    selector: 'app-book-manage',
    templateUrl: './book-manage.component.html',
    styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit {
    searchKey:FormControl = new FormControl();

    private books:Observable<any>;
    private keyword:string = '';

    constructor(public router:Router, private bookService:BookService) {
        this.searchKey.valueChanges
            .subscribe(keyword => this.keyword = keyword);
    }

    create() {
        this.router.navigateByUrl('/book/0');
    }

    modify(book:Book) {
        this.router.navigateByUrl('/book/' + book.id);
    }

    delete(book:Book) {
        this.bookService.deleteBook(book);
    }


    ngOnInit() {
        this.books = this.bookService.getBooks();
    }

}

