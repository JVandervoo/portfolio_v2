import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, query, animateChild, stagger } from '@angular/animations';

import { NavLink } from "../../models/nav-link.model";

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
    animations: [
        trigger("flyInFromTop", [
            transition(':enter', [
                style({ transform: 'translate3d(0, -100%, 0)' }),
                animate('0.5s cubic-bezier(0.27, 0.1, 0, 1)', style({
                    transform: 'translate3d(0, 0, 0)'
                }))
            ]),
            transition(':leave', [
                animate('0.5s 0.24s cubic-bezier(1, 0, 0.73, 0.9)', style({
                    transform: 'translate3d(0, -100%, 0)'
                }))
            ])
        ]),
        trigger("flyInFromBottom", [
            transition(':enter', [
                style({ transform: 'translate3d(0, 100%, 0)' }),
                animate('0.5s cubic-bezier(0.27, 0.1, 0, 1)', style({
                    transform: 'translate3d(0, 0, 0)'
                }))
            ]),
            transition(':leave', [
                animate('0.5s 0.24s cubic-bezier(1, 0, 0.73, 0.9)', style({
                    transform: 'translate3d(0, 100%, 0)'
                }))
            ])
        ]),
        trigger("flyInFromRight", [
            transition(':enter', query('li', [
                style({ transform: 'translate3d(700px, 0, 0)' }),
                stagger(80, animate('0.5s cubic-bezier(0.27, 0.1, 0, 1)', style({
                    transform: 'translate3d(0, 0, 0)'
                })))
            ])),
            transition(':leave', query('li', [
                stagger(-80, animate('0.5s cubic-bezier(0.27, 0.1, 0, 1)', style({
                    transform: 'translate3d(700px, 0, 0)'
                })))
            ]))
        ])
    ]
})

export class BurgerMenuComponent implements OnInit {

    navLinks: Array<NavLink> = [
        { route: "", displayName: "Home" },
        { route: "about", displayName: "About" },
        { route: "projects", displayName: "Projects" },
        { route: "contact", displayName: "Contact" },
    ]

    constructor() { }

    ngOnInit() {
    }

}
