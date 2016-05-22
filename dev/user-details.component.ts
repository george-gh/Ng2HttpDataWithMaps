import { Component, OnInit, Input } from '@angular/core';
import {User} from './models/user';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'user-details',
    template: `
        <div>
            <h4>Details</h4>
            <ul>
                <li>Email: {{currentUser.email}}</li>
                <li>Username: {{currentUser.username}}</li>
                <li>Phone: {{currentUser.phone}}</li>
                <li>WebSite: {{currentUser.website}}</li>
                <sebm-google-map [latitude]="currentUser.geo.lat" 
                                    [longitude]="currentUser.geo.lng"
                                    [zoom]="11">
                </sebm-google-map>
            </ul>
        </div>
    `,
    styles: [`
        .sebm-google-map-container {
            height: 300px;
        }
    `],
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
})
export class UserDetailsComponent implements OnInit {
    
    @Input() currentUser: User;
    
    constructor() { }

    ngOnInit() { }

}