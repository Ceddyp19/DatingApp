import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';

  //turns off type safety in typescript (ie: users can by enay data type)
  users: any;

  constructor(private http: HttpClient) {}
  //when component inititialize getUser is invoked. Like lifecycle methods in React.js
  ngOnInit() {
    this.getUsers();
  }

  //makes a get request to api endpoint with all the users
  //getUsers() {
  //  this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //    this.users = response;
  //  }, error => {
  //    console.log(error);
  //  })
  //}
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}


