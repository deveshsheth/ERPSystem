import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidebarRoutingModule } from './slidebar-routing.module';
import { SlidebarComponent } from './slidebar/slidebar.component';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [SlidebarComponent],
  imports: [
    CommonModule,
    SlidebarRoutingModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class SlidebarModule { }
