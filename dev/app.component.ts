import {Component} from '@angular/core';
import {UserListComponent} from './users-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>HTTP Data</h1>
        <user-list></user-list>
    `,
    directives: [UserListComponent]
})
export class AppComponent {
    
    
}
