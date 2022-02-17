import { Component, OnInit } from '@angular/core';

import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  deleteWarn: boolean = false;
  alert: boolean = false;
  deleteStudentID: Number = -1;
  deleteStudentName: String = "";

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(students => {
      this.showWarn();
      this.students = students;
    });
  }

  delete(id: any): void {
    // this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(id).subscribe((response) => {
      this.getStudents();
      this.closeWarn();
      this.showAlert();
      this.deleteStudentID = -1;
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
    this.deleteStudentName = "";
  }

  setDeleteStudentProfile(student: Student) {
    console.log(student);
    this.deleteStudentID = student.id;
    this.deleteStudentName = student.name;
  }

}
