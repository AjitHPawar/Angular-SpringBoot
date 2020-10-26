import { Component, OnInit } from '@angular/core';
import { FeedBackService } from './services/feed-back.service';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSidebarUserRegistrationVisible: boolean = true;
  constructor(private commonService: CommonService, private route: Router) {}
  title = 'NgSoft';
  isSidebarOpened = true;

  ngOnInit() {
    this.commonService.isSidebarOpen.subscribe((data) => {
      this.isSidebarOpened = data;
    });
    this.commonService.sidebarUserRegistration.subscribe(
      (booleanData) => (this.isSidebarUserRegistrationVisible = booleanData)
    );
  }

  toggleSidebar() {
    this.commonService.isSidebarOpen.next(true);
  }

  openRegister() {
    this.route.navigate(['/registerUser']);
  }

  openFeedback() {
    this.route.navigate(['/feedback']);
  }

  openProducts() {
    this.route.navigate(['/products']);
  }
}
