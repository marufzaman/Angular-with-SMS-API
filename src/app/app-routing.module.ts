import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
