import { Component, OnInit } from '@angular/core';
import {UserListComponent} from './users-list.component';
//import {MainMenuComponent} from './main-menu.component';


@Component({
    moduleId: module.id,
    selector: 'my-first',
    template: `
        <div>
            <h3>First component</h3>
            <user-list></user-list>
        </div>
    `,
    directives: [UserListComponent]
})
export class MyFirstComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}