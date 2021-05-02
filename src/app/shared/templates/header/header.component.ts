import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() selectTheme = new EventEmitter<any>();

  isDarkTheme: any;

  constructor(public router: Router) { }

  userName: any;

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  themeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
    this.selectTheme.emit(this.isDarkTheme);
  }

  ifUserLoggedIn() {
    if (sessionStorage.getItem('UserData')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('isUserLoggedin');
    sessionStorage.removeItem('UserData');
    this.router.navigate(['/auth/login']);
  }

}
