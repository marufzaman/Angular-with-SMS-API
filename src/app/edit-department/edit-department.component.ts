import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { DepartmentComponent } from '../department/department.component';
import { Department } from '../model/department.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent implements OnInit {
  constructor(
    private department: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  depart: any | undefined;
  alert: boolean = false;

  ngOnInit(): void {
    this.getDepartmentData();
  }
  getEditedDepartmentData(id: any, data: NgForm) {
    this.department.updateDepartment(id, data).subscribe((response) => {
      this.showAlert();
    });
  }

  getDepartmentData(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(id);
    this.department.getDepartmentById(id).subscribe((dept) => {
      this.depart = dept;
    });
  }

  goBack() {
    this.location.back();
  }

  showAlert() {
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
    this.location.back();
  }
}
