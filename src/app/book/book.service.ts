import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    constructor(private http:HttpClient) {
    }

    private books:Book[] = [];


    getBooks():Observable<any> {
        return this.http
            .get<any>('/api/book', {observe: 'response'})
            .map(resp => this.books = resp['body']);
    }

    getBook(id:number):Observable<any> {
        return this.http
            .get('/api/book/'+id, {observe: 'response'})
            .map(resp => resp['body']);
    }

    createBook(book:Book) {
        this.books.push(book);
        console.log(this.books);
    }

    deleteBook(book:Book) {
        let bookIndex = this.books.findIndex(function (ele) {
            return ele.id === book.id;
        });
        this.books.splice(bookIndex, 1);
    }

}

export class Book {
    constructor(public id:number,
                public name:string,
                public tags:Array<string>,
                public rating:number,
                public desc:string,
                public categories:Array<string>,
                public link:string) {

    }
}

