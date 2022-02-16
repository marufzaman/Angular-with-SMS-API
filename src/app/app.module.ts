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



import { ListCouresComponent } from './list-coures/list-coures.component';
import { AddcourseComponent } from './addcourse/addcourse.component';

import { EditcourseComponent } from './editcourse/editcourse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent,
    StudentEditComponent,
    DashboardComponent,
    StudentViewComponent,

    ListCouresComponent,
    AddcourseComponent,
    EditcourseComponent,
    PageNotFoundComponent,
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
