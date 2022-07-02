import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //property to store what user enter in form
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  //make use of account service to login users
  login() {
    //returns an Observable;observables are lazy and don't return anything until you use the subscribe method
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');

    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
