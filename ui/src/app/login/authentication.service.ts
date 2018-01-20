import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
  private authUrl = 'https://polar-thicket-56641.herokuapp.com/api/login';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, 'username=' + username + '&password=' + password, {headers: this.headers})
      .map((response: Response) => {
        console.log(response);
        return response.url === 'https://immense-inlet-78725.herokuapp.com/user';
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
