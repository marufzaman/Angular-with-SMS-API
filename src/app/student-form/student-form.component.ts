import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  add(newStudent: any): void {
    console.log(newStudent);
    // newStudent = newStudent.trim();
    if (!newStudent) {
      return;
    }
    console.log(newStudent);
    this.studentService
      .addStudent({ newStudent } as unknown as Student)
      .subscribe((student) => {
        console.log(student);
        this.students.push(student);
      });
  }
}
