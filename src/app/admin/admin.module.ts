import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { DataTablesModule } from 'angular-datatables';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import {PasswordModule} from 'primeng/password';
import { AddusersComponent } from './admin/addusers/addusers.component';
@NgModule({
  declarations: [AdminComponent, UsersComponent, AddusersComponent, AdminprofileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    DataTablesModule,
    PasswordModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class AdminModule { }
