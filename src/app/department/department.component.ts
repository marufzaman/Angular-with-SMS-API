import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../model/department.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: any = [];

  constructor(
    private department: DepartmentService // private route: ActivatedRoute
  ) {}

  deleteWarn: boolean = false;
  alert: boolean = false;
  deleteDepartmentId: number | undefined;
  deleteDepartmentName: string | undefined;

  ngOnInit(): void {
    this.getDepartments();
  }

  deleteDepartmentById(id: any) {
    console.log(id);
    this.department.deleteDepartment(id).subscribe((response) => {
      this.getDepartments();
      this.closeWarn();
      this.showAlert();
      this.deleteDepartmentId = undefined;
      this.deleteDepartmentName = undefined;
    });
  }

  getDepartments() {
    this.department.getDepartments().subscribe((data) => {
      this.showWarn();
      this.departments = data;
    });
  }

  showWarn() {
    this.deleteWarn = true;
  }

  closeWarn() {
    this.deleteWarn = false;
  }

  showAlert() {
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }

  setDeleteId(name: string, id: number) {
    this.deleteDepartmentId = id;
    this.deleteDepartmentName = name;
  }
}
