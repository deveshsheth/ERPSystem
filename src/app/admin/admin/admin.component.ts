import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userlist: {};
  constructor(private userservice: UsersService, private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  async ngOnInit() {
    await this.userservice.listusers().then(res => {
      this.userlist = res;
    })
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.userservice.deleteusers(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/admin/users']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }
}


