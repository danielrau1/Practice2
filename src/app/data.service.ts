import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // (4) Import from the web

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { } // (4) Make the injection for the imported HttpClient, and call its variable http

  // (3) Method will be used in the home component
  service_message = 'click on Service button to call the Service method';
  firstClick() {
    this.service_message = 'You have called the Service method!';
    return console.log('clicked 11');
  }

// (4) Import from the web
  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }


}
