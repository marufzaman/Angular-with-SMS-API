import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Course } from '../model/course';
import { CourseListService } from '../services/course-list.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
})
export class AddcourseComponent implements OnInit {
  //data: any;
  alert: any;
  constructor(
    private _courseService: CourseListService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  addNewCourse(data: any) {
    this._courseService.addCourse(data).subscribe((result: any) => {
      console.warn(result);
      this.showAlert() ;
    });
  }

  goBack(): void {
    this.location.back();
  }

  showAlert() {
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
    this.goBack();
  }
}
