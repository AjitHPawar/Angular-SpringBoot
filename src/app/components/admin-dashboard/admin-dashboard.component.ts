import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserRegisterService } from 'src/app/services/user-register.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private userservice: UserRegisterService) {}

  ngOnInit(): void {
    this.userservice.getUserList().subscribe((userData) => {
      this.users = userData;
    });
  }
}
