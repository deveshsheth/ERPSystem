import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';

import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';

import { StudentsregComponent } from './studentsreg/studentsreg.component';
import { AddstudentsComponent } from './studentsreg/addstudents/addstudents.component';
import { ManagebatchComponent } from './managebatch/managebatch.component';
import { GeneralComponent } from './managebatch/general/general.component';
import { AddgeneralComponent } from './managebatch/general/addgeneral/addgeneral.component';
import { ClubComponent } from './managebatch/club/club.component';
import { AddclubComponent } from './managebatch/club/addclub/addclub.component';
import { OnetooneComponent } from './managebatch/onetoone/onetoone.component';
import { AddonetooneComponent } from './managebatch/onetoone/addonetoone/addonetoone.component';
import { OthersComponent } from './managebatch/others/others.component';


@NgModule({
  declarations: [StudentsComponent, AddstudentsComponent, StudentsregComponent, ManagebatchComponent, GeneralComponent, AddgeneralComponent, ClubComponent, AddclubComponent, OnetooneComponent, AddonetooneComponent, OthersComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class StudentsModule { }
