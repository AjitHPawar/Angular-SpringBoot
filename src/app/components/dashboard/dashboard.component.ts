import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedBackService } from 'src/app/services/feed-back.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSidebarOpen: boolean;
  sidebarIconVisibility: boolean;
  loginVisiblity: boolean;
  logoutVisibility: boolean;
  constructor(private route: Router, private commonService: CommonService) {
    this.commonService.isSidebarOpen.subscribe((data) => {
      this.isSidebarOpen = data;
    });
    this.commonService.sidebarIconVisibility.subscribe(
      (data) => (this.sidebarIconVisibility = data)
    );
    this.commonService.loginVisiblity.subscribe(
      (data) => (this.loginVisiblity = data)
    );
    this.commonService.logoutVisibility.subscribe(
      (data) => (this.logoutVisibility = data)
    );
  }

  ngOnInit(): void {}

  openLogin() {
    this.route.navigate(['/login']);
  }

  openLogout() {
    this.commonService.sidebarIconVisibility.next(false);
    this.commonService.loginVisiblity.next(true);
    this.commonService.logoutVisibility.next(false);
    this.route.navigate(['/']);
  }

  toggleSidebar() {
    this.commonService.isSidebarOpen.next(!this.isSidebarOpen);
  }
}
