import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {User} from './models/user';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
    
    userUrl: string = '';
    
    constructor(private http: Http) {}
    
    getUsers(): Observable<any> {
        return this.http.get(this.userUrl)
                            .map( (res: Response) => res.json() );
    }
    
    addUser(user: User): Observable<any> {
        const body = JSON.stringify(user);
        const header = new Headers;
        header.append("Content-Type", "application/json");
        return this.http.post(this.userUrl, body, {headers: header})
            .map((res: Response) => res.json());
    }
    
    removeUser(user: User): Observable<any> {
        return this.http.delete(this.userUrl)
             .map((res: Response) => {
                 console.log('Response (delete): ', res);
                 res.json()
                }); 
    }
    
    updateUser(user: User): Observable<any> {
        return null;
    }
}