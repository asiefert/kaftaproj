import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})

export class SubmitReviewComponent implements OnInit {
  form: FormGroup;
  constructor(private service: SharedService, 
  private router: Router, private builder: FormBuilder) { 

  }

  ReviewList: any = [];
  Name!: string;
  Rating!: string;
  Review!: string;

  ngOnInit(): void {
    this.refreshReviews();
    this.form = this.builder.group({
      Name: this.builder.control('', [Validators.required]),
      Rating: this.builder.control('', [Validators.required]),
      Review: this.builder.control('', [Validators.required])
    });
  }

  refreshReviews() {
    this.service.getReviewList().subscribe(data => {
      this.ReviewList = data;
      console.log(this.ReviewList);
    });
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
