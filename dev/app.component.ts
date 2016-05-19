import {Component} from '@angular/core';
import {UserListComponent} from './users-list.component';
import {UserEditComponent} from './user-edit.component';
 
@Component({
    selector: 'my-app',
    template: `
        <h1>HTTP Data</h1>
        <user-list></user-list>
        <user-edit></user-edit>
    `,
    directives: [UserListComponent, UserEditComponent]
})
export class AppComponent {
    
    
}
