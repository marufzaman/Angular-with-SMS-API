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
import { AddresultComponent } from './addresult/addresult.component';
import { EditresultComponent } from './editresult/editresult.component';
import { ResultlistComponent } from './resultlist/resultlist.component';


import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit/:id', component: StudentEditComponent },
  { path: 'view/:id', component: StudentViewComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'form', component: StudentFormComponent },

  { path: 'department', component: DepartmentComponent, pathMatch: 'full' },
  { path: 'department/addDepartment', component: AddDepartmentComponent },
  {
    path: 'department/editDepartment/:id',
    component: EditDepartmentComponent,
  },
  {
    path: 'department/view/:id',
    component: ViewDepartmentComponent,
  },
  { path: 'courses', component: ListCouresComponent },
  { path: 'courses/addcourse', component: AddcourseComponent },
  { path: 'courses/editcourse/:id', component: EditcourseComponent },
  // {path:'**',component: PageNotFoundComponent}
  { path: 'result', component: ResultlistComponent },
  { path: 'result/addresult', component: AddresultComponent },
  { path: 'result/edit/:id', component: EditresultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
