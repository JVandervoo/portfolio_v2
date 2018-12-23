import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, query, animateChild, stagger } from '@angular/animations';
import { Router, NavigationEnd } from "@angular/router";


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

    currentRoute: string;

    constructor(private router: Router) { }

    ngOnInit() {
        const url = this.router.routerState.snapshot.url.split('/');
        this.currentRoute = url.length === 0 ? "" : url[url.length - 1];

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = event.urlAfterRedirects.split('/');
                this.currentRoute = url.length === 0 ? "" : url[url.length - 1];
            }
        });
    }

}
