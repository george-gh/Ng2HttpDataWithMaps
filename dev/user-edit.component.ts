import { Component, OnInit } from '@angular/core';
import {FormBuilder, FORM_DIRECTIVES, ControlGroup, ControlArray, Control, Validators} from '@angular/common';
import {DataService} from './data.service';
import {User} from './models/user';

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: '/templates/edit-user.tpl.html',
    styleUrls: ['../dev/stylesheets/edit-user.css'],
    directives: [FORM_DIRECTIVES],
    providers: [DataService]
})
export class UserEditComponent implements OnInit {
    userForm: ControlGroup;
    currentUser: User;
    
    constructor(private fb: FormBuilder, private dataService: DataService) {}

    ngOnInit() {
        this.userForm = this.fb.group({
            'name': ['', Validators.required],
            'username': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, validEmail])],
            'phone': ['', onlyNumbers],
            'website': ['', validWebsite],
            'geo': this.fb.group({
                'lat': ['', validLocation],
                'lng': ['', validLocation]
            })
        });
    }
    
    onFormSubmit() {
        this.dataService.addUser(this.userForm.value).subscribe( 
            data => console.log('Saving data: ', data),
            error => console.error(error)                
        );
        this.userForm.value = {};
    }

}

function onlyNumbers(c:Control):{[s:string]: boolean} {
    let phoneRegex = /^\d+$/;
    if (!phoneRegex.test(c.value) && c.value !== '') 
        return {onlyNumbers: false};
}

function onlyStrings(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/\w+/'))
        return {onlyStrings: false};
} 

function validWebsite(c:Control):{[s:string]: boolean} {
    let websiteRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (!websiteRegex.test(c.value))
        return {validWebsite: false};
}

function validZipcode(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/^\\d{5}(-\\d{4})?$/'))
        return {validZipcode: false};
}

function validLocation(c:Control):{[s:string]: boolean} {
    let coordRegex = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
    if (!coordRegex.test(c.value))
        return {validLocation: false};
}

function validEmail(c:Control):{[s:string]: boolean} {
    let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(c.value))
        return {validEmail: false}
}