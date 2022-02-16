import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css'],
})
export class ViewDepartmentComponent implements OnInit {
  constructor(
    private department: DepartmentService,
    private route: ActivatedRoute
  ) {}

  departmentInfo: any | undefined;

  ngOnInit(): void {
    this.getDepartmentInfo();
  }

  getDepartmentInfo() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.department.getDepartmentById(id).subscribe((departmentInfo) => {
      this.departmentInfo = departmentInfo;
      console.log(id);
      console.log(departmentInfo);
    });
  }
}
