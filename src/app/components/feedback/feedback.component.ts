import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { FeedBackService } from 'src/app/services/feed-back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback = new Feedback();
  errorMSg = '';

  constructor(private service: FeedBackService, private route: Router) {}

  ngOnInit(): void {}
  sendFeedback() {
    this.service.sendFeedback(this.feedback).subscribe(
      (data) => {
        if (data.success) {
          this.errorMSg = 'Feedback Sent Succsefully.';
        } else {
          this.errorMSg = 'ohhhh....Feedback Sending Failed.';
        }
        //this.route.navigate(['/']);
      },
      (error) => {
        this.errorMSg = 'Ohhh....Feedback Sending Failed.';
        //this.route.navigate(['/login']);
      }
    );
  }
}
