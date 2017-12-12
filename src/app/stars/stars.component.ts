import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
    @Input()
    rating:number = 0;
    stars:boolean[] = [];

    @Input()
    readonly:boolean = false;

    @Output()
    ratingChange:EventEmitter<number> = new EventEmitter();


    constructor() {
    }

    ngOnInit() {
        for (let i = 1; i <= 5; i++) {
            this.stars.push(this.rating >= i);
        }
    }

    clickStar(index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.stars = [];
            for (let i = 1; i <= 5; i++) {
                this.stars.push(this.rating >= i);
            }

            this.ratingChange.emit(this.rating);
        }

    }

}
