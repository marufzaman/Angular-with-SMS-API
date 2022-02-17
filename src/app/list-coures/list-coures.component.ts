import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseListService } from '../services/course-list.service';

@Component({
  selector: 'app-list-coures',
  templateUrl: './list-coures.component.html',
  styleUrls: ['./list-coures.component.css'],
})
export class ListCouresComponent implements OnInit {
  public courseList: any;
  selecteUpdate?: Course;
  message: any;

  constructor(private _courseService: CourseListService) {
    this.getAllCourses();
  }

  ngOnInit(): void {
    //  this._courseService.getCourese()
    //.subscribe((data) => this.courseList = data);
    //console.log(this.courseList);
  }

  onSelect(coures: Course): void {
    this.selecteUpdate = coures;
  }

  getAllCourses() {
    this._courseService
      .getCourese()
      .subscribe((data) => (this.courseList = data));
  }

  deleteCourse(id: any) {
    this._courseService.deleteCourse(id).subscribe((response) => {
      alert('Deleted Successfully');

      this.getAllCourses();
    });
  }
}
