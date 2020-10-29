import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  genlist:{};
  constructor(private studentservice:StudentsService,private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

 async ngOnInit() {
    await this.studentservice.listbatchgstudent().then(res => {
      this.genlist = res;
    })
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.studentservice.deletebatchstudent(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/students/managebatch/general']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }
}
