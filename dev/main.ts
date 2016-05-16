import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

bootstrap(AppComponent, [HTTP_PROVIDERS, ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
