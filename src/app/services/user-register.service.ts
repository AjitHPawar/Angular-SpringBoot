import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService implements OnInit {
  username = '';
  password = '';

  constructor(private http: HttpClient, private commonService: CommonService) {}

  ngOnInit() {}
  registerUser(user: Object): Observable<any> {
    return this.http.post('http://localhost:8080/user/adduser', user);
  }

  loginUser(user: Object): Observable<any> {
    return this.http.post('http://localhost:8080/user/loginuser', user);
  }
  getUserList(): Observable<any> {
    return this.http.get('http://localhost:8080/user/getuser');
  }

  getDemoSecurity(): Observable<any> {
    this.commonService.loginUser.subscribe((user) => (this.username = user));
    this.commonService.loginPass.subscribe((pass) => (this.password = pass));
    const header = new HttpHeaders({
      Authorization: 'Basic' + btoa(this.username + ':' + this.password),
    });
    return this.http.post('http://localhost:8081/', {
      header,
    });
  }
}
