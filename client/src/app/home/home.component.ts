import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Http2ServerRequest } from 'http2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
    // this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }


  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
