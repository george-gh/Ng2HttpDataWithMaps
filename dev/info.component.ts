import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'info',
    template: `
        <div>
            <p>This application retrieve http data</p>
        </div>
    `
})
export class InfoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}