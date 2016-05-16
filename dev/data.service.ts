import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from './models/user';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
    
    userUrl: string = 'http://jsonplaceholder.typicode.com/users';
    
    constructor(private http: Http) {}
    
    getUsers(): Observable<any> {
         return this.http.get(this.userUrl)
             .map((res: Response) => res.json());  
    }
}