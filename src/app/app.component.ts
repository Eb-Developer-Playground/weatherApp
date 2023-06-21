import { Component, OnInit } from '@angular/core';

import { AccountService } from './_services';
import { Account, Role } from './_models';
import { WeatherService } from '@app/_services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  Role = Role;
  account?: Account | null;
  

  constructor(private accountService: AccountService, private weatherService: WeatherService) {
    this.accountService.account.subscribe(x => this.account = x);
  }


  logout() {
    this.accountService.logout();
  }
}