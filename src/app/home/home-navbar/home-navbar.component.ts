import { Component } from '@angular/core';

import { AccountService } from '@app/_services';
import { Account,Role } from '@app/_models';
import { WeatherService } from '@app/_services';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent {
  Role = Role;
  account?: Account | null;
  

  constructor(private accountService: AccountService, private weatherService: WeatherService) {
    this.accountService.account.subscribe(x => this.account = x);
  }


  logout() {
    this.accountService.logout();
  }
 
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  

  isForecastVisible: boolean = false;

  toggleForecast() {
    this.isForecastVisible = !this.isForecastVisible;
  }
  

}
