import { Component, OnInit } from '@angular/core';
import {UserEditComponent} from './user-edit.component';

@Component({
    moduleId: module.id,
    selector: 'my-second',
    template: `
        <div>
            <h3>Add a new user</h3>
            <user-edit></user-edit>
        </div>
    `,
    directives: [UserEditComponent]
})
export class MySecondComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}