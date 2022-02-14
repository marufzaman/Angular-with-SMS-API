import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  add(name: string, gender: string): void{
    name = name.trim();
    gender = gender.trim();
    if (!name && !gender) { return; }
    this.studentService.addStudent({ name } && {gender} as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }
}
