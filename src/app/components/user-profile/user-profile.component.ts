import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user = new User();
  name = '';
  email = '';
  contact = 0;
  usertype = '';
  username = '';

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.userN.subscribe((data) => {
      this.name = data;
    });
    this.commonService.userEmail.subscribe((data) => {
      this.email = data;
    });
    this.commonService.userContact.subscribe((data) => {
      this.contact = data;
    });
    this.commonService.userType.subscribe((data) => {
      this.usertype = data;
    });
    this.commonService.userName.subscribe((data) => {
      this.username = data;
    });
  }
}
