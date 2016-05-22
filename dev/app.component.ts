import {Component} from '@angular/core';
// import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {UserListComponent} from './users-list.component';
import {UserEditComponent} from './user-edit.component';
import {MainMenuComponent} from './main-menu.component';
 
@Component({
    selector: 'my-app',
    template: `
        <h1>HTTP Data</h1>
        <user-list></user-list>
        <user-edit></user-edit>
    `,
    directives: [UserListComponent, UserEditComponent, MainMenuComponent]
})
export class AppComponent {
     
    
}
