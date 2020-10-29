import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
emplist:{};
  constructor(private empservice:EmployeesService, private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

 async ngOnInit() {
  await this.empservice.listemployees().then(res => {
    this.emplist = res;
  })
  }
delete(value){
  this.confirmationService.confirm({
    message: 'Are you sure want to Delete?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
      this.empservice.deleteemployees(value).subscribe(res => {
        console.log("res deleted....");
      })
      this.rut.navigate(['/slidebar/hr/employees']);

    },
    reject: () => {

      [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

    }
  });
}

}
