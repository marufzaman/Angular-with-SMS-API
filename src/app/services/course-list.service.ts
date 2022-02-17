import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080/api/v1/courses';

  getCourese(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  addCourse(course: any) {
    return this.http.post(this.baseUrl, course);
  }

  deleteCourse(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCourse(id: any, course: any) {
    return this.http.put(`${this.baseUrl}/${id}`, course);
  }

  getCouseById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
