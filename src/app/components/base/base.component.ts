import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, query, animateChild, stagger } from '@angular/animations';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
    animations: [
        trigger('animateMenu', [
            transition(':leave', group([
                query('@flyInFromRight', animateChild(), { optional: true }),
                query('@flyInFromTop', animateChild()),
                query('@flyInFromBottom', animateChild()),
            ]))
        ])
    ]
})
export class BaseComponent implements OnInit {

    showMenu: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
