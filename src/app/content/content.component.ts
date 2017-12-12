import {Component, OnInit} from '@angular/core';
import{Router} from '@angular/router'
import 'rxjs/add/operator/filter';
import {NavigationEnd} from "@angular/router";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    pageTile:string = '';
    pageDesc:string = '';

    constructor(public router:Router) {
        router.events.filter(event => event instanceof NavigationEnd)
            .subscribe((event:NavigationEnd)=> {
                if (event.url == '/dashboard') {
                    this.pageTile = 'Dash Board';
                    this.pageDesc = 'You are beautiful!';
                } else {
                    this.pageTile = 'Books';
                    this.pageDesc = 'You are a walking book eater!';
                }
            })
    }

    ngOnInit() {

    }

}
