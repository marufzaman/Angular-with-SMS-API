import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../model/student';

// import { STUDENTS } from './mock-students';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsUrl = 'http://localhost:8080/api/v1/students'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // constructor(private messageService: MessageService) { }
  constructor(private http: HttpClient) {}

  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
    // .pipe(
    //   catchError(this.handleError<Student[]>('getStudents', []))
    // );
  }

  /** GET student by id. Will 404 if id not found */
  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
    // .pipe(
    //   catchError(this.handleError<Student>(`getStudent id=${id}`))
    // );
  }

  /** POST: add a new student to the server */
  addStudent(student: any): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student);
    // .pipe(
    //   catchError(this.handleError<Student>('addStudent'))
    // );
  }

  /** PUT: update the student on the server */
  updateStudent(student: Student): Observable<any> {
    const url =
      `${this.studentsUrl}/${student.id}` +
      '?name=' +
      `${student.name}` +
      '&gender' +
      `${student.gender}`;
    return this.http.put(url, student);
    // .pipe(
    // catchError(this.handleError<any>('updateStudent'))
    // );
  }

  /** DELETE: delete the student from the server */
  deleteStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions);
    // .pipe(
    //   catchError(this.handleError<Student>('deleteStudent'))
    // );
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
