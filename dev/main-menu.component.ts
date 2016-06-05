import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    selector: 'main-menu',
    template: `
        <ul>
            <li>
                <a [routerLink]="['/list']">User list</a>
            </li>
            <li>
                <a [routerLink]="['/new']">New user</a>
            </li>
            <li>
                <a [routerLink]="['/info']">Info</a>
            </li>
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class MainMenuComponent {
    
}