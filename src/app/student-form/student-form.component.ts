import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  add(newStudent: any): void {
    // console.log(newStudent);
    newStudent.name = newStudent.name.trim();
    newStudent.gender = newStudent.gender.trim();
    if (!newStudent.name || !newStudent.gender) {
      return
    }
      this.studentService
      .addStudent(newStudent)
      .subscribe((student) => {
        this.students.push(student)
        alert("New Student!\n"+newStudent.name+" Added!")
        this.goBack()
      });

  }
}
