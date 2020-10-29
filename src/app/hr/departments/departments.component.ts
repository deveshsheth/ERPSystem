import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  deplist: {}
  constructor(private depservice: DepartmentsService, private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  async ngOnInit() {
    await this.depservice.listdepartments().then(res => {
      this.deplist = res;
    })
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.depservice.deletedepartments(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/hr/departments']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }
}


