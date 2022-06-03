import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //property to store what user enter in form
  model: any = {};
 
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  //make use of account service to login users
  login() {
    //returns an Observable;observables are lazy and don't return anything until you use the subscribe method
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);

    }, error => console.log(error)
    );
  }

  logout(){
    this.accountService.logout();

  }

}
