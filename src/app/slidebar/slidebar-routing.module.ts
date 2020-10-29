import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { HrComponent } from '../hr/hr/hr.component';
import { PositionsComponent } from '../hr/positions/positions.component';
import { AddpositionsComponent } from '../hr/positions/addpositions/addpositions.component';
import { DepartmentsComponent } from '../hr/departments/departments.component';
import { AdddepartmentsComponent } from '../hr/departments/adddepartments/adddepartments.component';
import { EmployeesComponent } from '../hr/employees/employees.component';
import { AddemployeesComponent } from '../hr/employees/addemployees/addemployees.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { FacultyComponent } from '../faculty/faculty/faculty.component';
import { StudentsComponent } from '../students/students/students.component';
import { CoursesComponent } from '../hr/courses/courses.component';
import { AddcoursesComponent } from '../hr/courses/addcourses/addcourses.component';

import { LoginauthGuard } from '../login/loginauth.guard';
import { BatchComponent } from '../faculty/batch/batch.component';
import { AddbatchComponent } from '../faculty/batch/addbatch/addbatch.component';
import { StudentsregComponent } from '../students/studentsreg/studentsreg.component';
import { AddstudentsComponent } from '../students/studentsreg/addstudents/addstudents.component';
import { ManagebatchComponent } from '../students/managebatch/managebatch.component';
import { GeneralComponent } from '../students/managebatch/general/general.component';
import { AddgeneralComponent } from '../students/managebatch/general/addgeneral/addgeneral.component';
import { ClubComponent } from '../students/managebatch/club/club.component';
import { AddclubComponent } from '../students/managebatch/club/addclub/addclub.component';
import { OnetooneComponent } from '../students/managebatch/onetoone/onetoone.component';
import { AddonetooneComponent } from '../students/managebatch/onetoone/addonetoone/addonetoone.component';
import { OthersComponent } from '../students/managebatch/others/others.component';
import { BatchstudentComponent } from '../faculty/batchstudent/batchstudent.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { StudenttypeComponent } from '../faculty/studenttype/studenttype.component';
import { GeneralsbComponent } from '../faculty/studenttype/generalsb/generalsb.component';
import { ClubsbComponent } from '../faculty/studenttype/clubsb/clubsb.component';
import { OnetoonesbComponent } from '../faculty/studenttype/onetoonesb/onetoonesb.component';
import { TimetableComponent } from '../faculty/timetable/timetable.component';
import { AddtimetableComponent } from '../faculty/timetable/addtimetable/addtimetable.component';
import { AddusersComponent } from '../admin/admin/addusers/addusers.component';




const routes: Routes = [
  {path:'slidebar',component:SlidebarComponent,children:[
    {path:"dashboard",component:DashboardComponent},
    {path:"hr",component:HrComponent,children:[
      {path:"departments",component:DepartmentsComponent,children:[
        {path:"adddepartments",component:AdddepartmentsComponent},
        {path:"adddepartments/:id",component:AdddepartmentsComponent}
      ]},
      {path:"positions",component:PositionsComponent,children:[
        {path:"addpositions",component:AddpositionsComponent},
         {path:"editpositions/:id",component:AddpositionsComponent}
      ]},
      {path:"employees",component:EmployeesComponent,children:[
        {path:"addemployees",component:AddemployeesComponent},
        {path:"addemployees/:id",component:AddemployeesComponent}
      ]},
      {path:"courses",component:CoursesComponent,children:[
        {path:"addcourses",component:AddcoursesComponent},
        {path:"addcourses/:id",component:AddcoursesComponent}

      ]},
    ]},

    {path:"admin",component:AdminComponent,children:[
        {path:"addusers",component:AddusersComponent},
        {path:"addusers/:id",component:AddusersComponent}
    ]},

    {path:"faculty",component:FacultyComponent,children:[

      {path:"batch",component:BatchComponent,children:[
        {path:"addbatch",component:AddbatchComponent},
        {path:"addbatch/:id",component:AddbatchComponent}
      ]},

      {path:"studenttype",component:StudenttypeComponent,children:[
        {path:"generalsb",component:GeneralsbComponent},
        {path:"clubsb",component:ClubsbComponent},
        {path:"onetoonesb",component:OnetoonesbComponent},

      ]},
      {path:"timetable",component:TimetableComponent,children:[
        {path:"addtimetable",component:AddtimetableComponent}
      ]},
      {path:"batchstudent/:bid",component:BatchstudentComponent}
    ]},

    {path:"students",component:StudentsComponent,children:[
      
        
        {path:"general",component:GeneralComponent,children:[
          {path:"addgeneral",component:AddgeneralComponent},
          {path:"addgeneral/:id",component:AddgeneralComponent}
        ]},

        {path:"club",component:ClubComponent,children:[
          {path:"addclub",component:AddclubComponent}
        ]},

        {path:"onetoone",component:OnetooneComponent,children:[
          {path:"addonetoone",component:AddonetooneComponent}
        ]},

        {path:"others",component:OthersComponent},

        

      
      {path:"studentsreg",component:StudentsregComponent,children:[
        {path:"addstudents",component:AddstudentsComponent},
        {path:"addstudents/:id",component:AddstudentsComponent}
      ]},
    ]}
  ],canActivate:[LoginauthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidebarRoutingModule { }
