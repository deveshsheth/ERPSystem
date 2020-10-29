import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr/hr.component';
import { PositionsComponent } from './positions/positions.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddpositionsComponent } from './positions/addpositions/addpositions.component';
import { AdddepartmentsComponent } from './departments/adddepartments/adddepartments.component';
import { AddemployeesComponent } from './employees/addemployees/addemployees.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { EditpositionsComponent } from './positions/editpositions/editpositions.component';
import { EditdepartmentsComponent } from './departments/editdepartments/editdepartments.component';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { CoursesComponent } from './courses/courses.component';
import { AddcoursesComponent } from './courses/addcourses/addcourses.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HrprofileComponent } from './hrprofile/hrprofile.component';
@NgModule({
  declarations: [HrComponent, PositionsComponent, DepartmentsComponent, EmployeesComponent, AddpositionsComponent, AdddepartmentsComponent, AddemployeesComponent, EditpositionsComponent, EditdepartmentsComponent, CoursesComponent, AddcoursesComponent, HrprofileComponent],
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    ConfirmDialogModule,
    ToastModule,
    MDBBootstrapModule.forRoot(),

  ],
  providers: [MessageService,ConfirmationService],
})
export class HrModule { }
