import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})

export class SubmitReviewComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  Name!: string;
  Rating!: string;
  Review!: string;

  ngOnInit(): void {
  }

  submitReview() {
    var val = {
      Name: this.Name,
      Rating: this.Rating,
      Review: this.Review,
    };
    this.service.submitReview(val).subscribe(res => {
      alert(res.toString())
    });
  }

}
