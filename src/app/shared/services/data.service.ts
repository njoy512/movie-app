import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  $baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getMoviesList() {
    return this.getList('maya/movies/');
  }

  getMoviesListByParams(params: any) {
    return this.getListByParams('maya/movies/', params);
  }

  // loader fns
  showloader() {
    let loader = document.getElementById('overlay');
    if (loader != null) {
      loader.style.display = 'block';
    }
  }

  hideloader() {
    let loader = document.getElementById('overlay');
    if (loader != null) {
      loader.style.display = 'none';
    }
  }




  // primary methods

  getListAbsUrl(url: any) {
    return this.http.get(url, this.Options());
  }

  getList(url: any) {
    var baseUrl = this.$baseUrl + url;
    return this.http.get(baseUrl, this.Options());
  }

  getListByParams(url: any, params: any) {
    var baseUrl = this.$baseUrl + url;
    return this.http.get(baseUrl, this.Options2(params));
  }

  postData(url: any, data: any) {
    var baseUrl = this.$baseUrl + url;
    return this.http.post(baseUrl, data, this.Options());
  }


  // httpOptions
  Options() {
    const data = JSON.parse(sessionStorage.getItem('UserData') || '');
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization': 'Token ' + data.token,
      })
    };
    return httpOptions;
  }

  Options2(params: any) {
    const data = JSON.parse(sessionStorage.getItem('UserData') || '');
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization': 'Token ' + data.token,
      }),
      params: new HttpParams({ fromObject: params })
    };
    // console.log('httpOptions', httpOptions);
    // console.log('httpParams', params);
    return httpOptions;
  }


}
