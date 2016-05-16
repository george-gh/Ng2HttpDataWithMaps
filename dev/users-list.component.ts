import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {DataService} from './data.service';
import {UserDetailsComponent} from './user-details.component';

@Component({
    selector: 'user-list',
    template: `
        <div>
            <h2>User list</h2>
            <ul>
                <li *ngFor="let user of users" class="user-element" [class.selected]="user == selectedUser" (click)="onSelectUser(user)">
                    {{user.name}}
                </li>
            </ul>
            <span>
                <button (click)="clearCurrentUser()">Clear</button>
            </span>
            <user-details *ngIf="selectedUser != null" [currentUser]="selectedUser"></user-details>
        </div>
    `,
    providers: [DataService],
    directives: [UserDetailsComponent],
    styleUrls: ['dev/stylesheets/main.scss']
})
export class UserListComponent implements OnInit {
    users: User[];
    selectedUser: User;
    
    constructor(private userService: DataService) {}
    
     ngOnInit() { 
         this.userService.getUsers().subscribe(
                                                data => {
                                                    this.users = data;
                                                },
                                                error => console.error('Error: ', error));
     }
     
     onSelectUser(uu: User) {
         this.selectedUser = uu;
     }
     
     clearCurrentUser() {
         this.selectedUser = null;
     }
}