import { Component, OnInit } from '@angular/core';
import { PositionsService } from './positions.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  list: {};
  constructor(private route: ActivatedRoute,private posservice: PositionsService, private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  async ngOnInit() {
    await this.posservice.listpositions().then(res => {
      this.list = res;
    })
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.posservice.deletepositions(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/hr/positions']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }
  
}
