import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();
  userTypes = ['USER', 'ADMIN', 'SUPERADMIN'];
  message: String = '';
  isUserTypeValid = true;

  constructor(
    private service: UserRegisterService,
    private commonService: CommonService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  registerUser() {
    this.service.registerUser(this.user).subscribe(
      (data) => {
        this.message = 'User Register Successfuly';
        this.commonService.isSidebarOpen.subscribe((data) => {
          if (!data) {
            this.route.navigate(['/login']);
          }
        });
      },
      (error) => {
        this.message = 'User Registration Failed.....';
      }
    );
  }
  validateUserType(value: any) {
    if (value === 'default') {
      this.isUserTypeValid = true;
    } else {
      this.user.usertype = value;
      this.isUserTypeValid = false;
    }
  }
}
