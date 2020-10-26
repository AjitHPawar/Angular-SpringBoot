import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  loginMsg = '';
  userDetails = new User();
  sidebarUserRegistration: boolean;
  constructor(
    private commonService: CommonService,
    private userService: UserRegisterService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  loginUser() {
    this.commonService.loginUser.next(this.user.username);
    this.commonService.loginPass.next(this.user.password);
    this.userService.loginUser(this.user).subscribe(
      (data) => {
        if (data.success) {
          this.loginMsg = 'Login Successfuly...';
          this.commonService.sidebarIconVisibility.next(true);
          this.commonService.loginVisiblity.next(false);
          this.commonService.logoutVisibility.next(true);
          if (
            data.data.usertype === 'Admin' ||
            data.data.usertype === 'SuperAdmin'
          ) {
            this.route.navigate(['/admindashboard']);
          } else {
            this.userDetails = data.data;
            this.commonService.userN.next(data.data.name);
            this.commonService.userEmail.next(data.data.email);
            this.commonService.userName.next(data.data.username);
            this.commonService.userType.next(data.data.usertype);
            this.commonService.userContact.next(data.data.contact);
            this.commonService.sidebarUserRegistration.next(false);
            this.route.navigate(['/userProfile']);
          }
        } else {
          this.loginMsg = 'Bad Credential';
        }
      },
      (error) => {
        this.loginMsg = 'Login Failed...';
      }
    );
  }
  openRegistration() {
    this.route.navigate(['/registerUser']);
  }
}
