import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  errMessage = 'This field shouldn\'t be empty *';
  errTypeMsg = 'Access denied for this portal';
  submitted: boolean = false;
  error: any;
  accessDenied: boolean = false;

  constructor(private fb: FormBuilder, public _authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  get fcontrol() { return this.loginForm.controls; }

  saveData(data: any) {
    sessionStorage.setItem('isUserLoggedin', 'true');
    sessionStorage.setItem('UserData', JSON.stringify(data));
  }

  logout() {
    sessionStorage.removeItem('isUserLoggedin');
    sessionStorage.removeItem('UserData');
  }

  submit() {
    this.submitted = true;
    this.error = '';
    // console.log(this.loginForm.status);
    if (this.loginForm.status === 'VALID') {
      let data = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
      };
      this._authService.login(data)
        .subscribe((res: any) => {
          console.log(res);
          if (res.is_success) {
            this.saveData(res.data);
            this.gotoLanding();
          }
        }, (Error: any) => {
          console.log('Err is ', Error);
          this.error = Error.error.error.message;
        });
    }
  }

  gotoLanding(): void {
    this.router.navigate(['/movie-list']);
  }


}
