import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $baseUrl = environment.baseUrl;

  constructor(public http: HttpClient) { }

  login(data: any) {
    // {
    //   'username': 'testuser',
    //   'password': 'ruDWLeHr9K7ErsUS',
    // }

    return this.http.post(this.$baseUrl + 'usermodule/login/', data);
  }


}
