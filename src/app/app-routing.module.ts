import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { ListCouresComponent } from './list-coures/list-coures.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit/:id', component: StudentEditComponent },
  { path: 'view/:id', component: StudentViewComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'form', component: StudentFormComponent },
  { path: 'courses', component: ListCouresComponent },
  { path: 'courses/addcourse', component: AddcourseComponent },
  { path: 'courses/editcourse/:id', component: EditcourseComponent },
  // {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
