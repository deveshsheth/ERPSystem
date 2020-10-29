import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
batchlist:{}
id=0;
getBatchUserId:Array<any>=[]
value1 : number=0
  constructor(private batchservice:FacultyService,private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

 async ngOnInit() {
   this.id=parseInt(sessionStorage.getItem('uid'));
   
    await this.batchservice.listbatches().then(res => {
      this.batchlist = res;
    })
    this.batchservice.getBatchUserId(this.id).then(res => {
      this.getBatchUserId = res;
    })

  //   let interval = setInterval(() => {
  //     this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
  //     if (this.value1 >= 100) {
  //         this.value1 = 100;
  //         this.batchservice.getBatchUserId(this.id).then(res => {
  //           this.getBatchUserId = res;
  //         })
  //         this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
  //         clearInterval(interval);
  //     }
  // }, 200);
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.batchservice.deletebatches(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/faculty/batch']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }
}
