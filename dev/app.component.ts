import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from '@angular/router-deprecated';
// import {UserListComponent} from './users-list.component';
// import {UserEditComponent} from './user-edit.component';
// import {MainMenuComponent} from './main-menu.component';
// import {InfoComponent} from './info.component';

import {MyFirstComponent} from './first.component';
import {MySecondComponent} from './second.component';
import {MyThirdComponent} from './third.component';
import {DeleteUserComponent} from './delete-user.component';
 
@Component({
    selector: 'my-app',
    template: `
        <nav>
            <ul>
                <li>
                    <a [routerLink]="['/First']">Show Users</a>
                </li>
                <li>
                    <a [routerLink]="['/Second']">Add user</a>
                </li>
                <li>
                    <a [routerLink]="['/Delete']">Delete user</a>
                </li>
                <li>
                    <a [routerLink]="['/Third']">Info</a>
                </li>
            </ul>
        </nav>
        <h1>Router Demo</h1>
        <router-outlet></router-outlet>
    `,
    // directives: [UserListComponent, UserEditComponent, InfoComponent, ROUTER_DIRECTIVES]
    directives: [MyFirstComponent, MySecondComponent, MyThirdComponent, DeleteUserComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/', name: 'root', redirectTo: ['/First']},
    {path: '/first', name: 'First', component: MyFirstComponent},
    {path: '/second', name: 'Second', component: MySecondComponent},
    {path: '/third', name: 'Third', component: MyThirdComponent},
    {path: '/delete', name: 'Delete', component: DeleteUserComponent}
])
export class AppComponent {
     /*
     <user-list></user-list>
     <user-edit></user-edit>
     */
    
}
