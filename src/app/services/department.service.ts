import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../model/department.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl = 'http://localhost:8080/api/department';

  constructor(private http: HttpClient) {}
  getDepartments() {
    return this.http.get(this.baseUrl);
    // return this.departments;
  }

  getDepartmentById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addDepartment(department: any) {
    return this.http.post(`${this.baseUrl}`, department);
  }

  deleteDepartment(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateDepartment(id: any, data: NgForm) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
