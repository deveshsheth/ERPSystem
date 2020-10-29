import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyprofileComponent } from './facultyprofile/facultyprofile.component';
import { BatchComponent } from './batch/batch.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MenuModule} from 'primeng/menu';
import { DataTablesModule } from 'angular-datatables';
import { BatchstudentComponent } from './batchstudent/batchstudent.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { StudenttypeComponent } from './studenttype/studenttype.component';
import { GeneralsbComponent } from './studenttype/generalsb/generalsb.component';
import { ClubsbComponent } from './studenttype/clubsb/clubsb.component';
import { OnetoonesbComponent } from './studenttype/onetoonesb/onetoonesb.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TimetableComponent } from './timetable/timetable.component';
import { AddtimetableComponent } from './timetable/addtimetable/addtimetable.component';
// MDB Angular Pro

@NgModule({
  declarations: [FacultyComponent, FacultyprofileComponent, BatchComponent, AddbatchComponent, BatchstudentComponent, StudenttypeComponent, GeneralsbComponent, ClubsbComponent, OnetoonesbComponent, TimetableComponent, AddtimetableComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    DataTablesModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    ProgressSpinnerModule
  ]
})
export class FacultyModule { }
