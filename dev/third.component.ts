import { Component, OnInit } from '@angular/core';
import {InfoComponent} from './info.component';

@Component({
    moduleId: module.id,
    selector: 'my-third',
    template: `
        <div>
            <h3>Info</h3>
            <info></info>
        </div>
    `,
    directives: [InfoComponent]
})
export class MyThirdComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}