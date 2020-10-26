import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  isSidebarOpen = new BehaviorSubject(false);
  sidebarIconVisibility = new BehaviorSubject(false);
  loginVisiblity = new BehaviorSubject(true);
  logoutVisibility = new BehaviorSubject(false);

  userN = new BehaviorSubject('');
  userEmail = new BehaviorSubject('');
  userType = new BehaviorSubject('');
  userContact = new BehaviorSubject(0);
  userName = new BehaviorSubject('');

  loginUser = new BehaviorSubject('');
  loginPass = new BehaviorSubject('');

  sidebarUserRegistration = new BehaviorSubject(true);
}
