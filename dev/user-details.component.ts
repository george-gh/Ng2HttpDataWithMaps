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
                <ul>
                    <h5>Address</h5>
                    <li>Street: {{currentUser.address.street}}</li>
                    <li>City: {{currentUser.address.city}}</li>
                    <li>Zipcode: {{currentUser.address.zipcode}}</li>
                    <sebm-google-map [latitude]="currentUser.address.geo.lat" 
                                     [longitude]="currentUser.address.geo.lng"
                                     [zoom]="5">
                    </sebm-google-map>
                </ul>
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