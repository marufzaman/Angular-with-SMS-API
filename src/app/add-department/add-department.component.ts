import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  constructor(
    private department: DepartmentService,
    private location: Location
  ) {}
  alert: boolean = false;

  ngOnInit(): void {}

  addDepartment(data: NgForm) {
    console.log(data.name);
    console.log(data);
    this.department.addDepartment(data).subscribe((response) => {
      this.showAlert();
      setTimeout(() => {
        this.closeAlert();
      }, 2000);
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
  }
}
