import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { CounterComponent } from './counter/counter.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent,
    StudentEditComponent,
    DashboardComponent,
    StudentViewComponent,


    DepartmentComponent,
    HomeComponent,
    AddDepartmentComponent,
    CounterComponent,
    EditDepartmentComponent,
    ViewDepartmentComponent,
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
