import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../services/course-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../model/course';
@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent implements OnInit {
  course: any;

  constructor(
    private _courseService: CourseListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    //this.route.queryParams.subscribe((params) => {
    // console.log(params); // { orderby: "courseId" }
    // this.id = params['courseId'];
    //
    //  console.log(this.id); // courseId
    // });

    this.getCourseById();
  }

  getCourseById() {
    const id = this.route.snapshot.paramMap.get('id');
    this._courseService.getCouseById(id).subscribe((data) => {
      this.course = data;
    });
  }

  editCourse(data: any) {
    const id = this.route.snapshot.paramMap.get('id');
    this._courseService.updateCourse(id, data).subscribe((result: any) => {
      alert('Course updated successfully');
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }
}
