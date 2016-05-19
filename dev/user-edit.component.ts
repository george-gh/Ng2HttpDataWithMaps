import { Component, OnInit } from '@angular/core';
import {FormBuilder, FORM_DIRECTIVES, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: '/templates/edit-user.tpl.html',
    directives: [FORM_DIRECTIVES]
})
export class UserEditComponent implements OnInit {
    userForm: ControlGroup;
    
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.userForm = this.fb.group({
            'name': ['', Validators.required],
            'username': ['', Validators.required],
            'email': ['', Validators.required],
            'phone': ['', Validators.compose([onlyNumbers])],
            'website': ['', Validators.compose([validWebsite])],
            'company-name': [''],
            'company-catchPhrase': [''],
            'company-bs': [''],
            'address-street': [''],
            'address-suite': [''],
            'address-city': ['', Validators.compose([onlyStrings])],
            'address-zipcode': ['', Validators.compose([validZipcode])],
            'geo-lat': ['', Validators.compose([validLocation])],
            'geo-lng': ['', Validators.compose([validLocation])]
        });
    }

}

function onlyNumbers(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/\d+/'))
        return {onlyNumbers: false};
}

function onlyStrings(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/\w+/'))
        return {onlyStrings: false};
} 

function validWebsite(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/'))
        return {validWebsite: false};
}

function validZipcode(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/^\\d{5}(-\\d{4})?$/'))
        return {validZipcode: false};
}

function validLocation(c:Control):{[s:string]: boolean} {
    if (!c.value.match('/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/'))
        return {validLocation: false};
}