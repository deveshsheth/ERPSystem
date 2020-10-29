import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  myForm:FormGroup;
  // getbatchbyid : Array<any>=[];
  uid=0;
  getsessions:{};
  constructor(private facultyservice : FacultyService,private messageService: MessageService,private rut:Router,private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.uid=parseInt(sessionStorage.getItem('uid'));
    console.log(this.uid);
    // this.facultyservice.getBatchUserId(this.uid).then(res => {
    //   this.getbatchbyid = res;
    // })
    this.facultyservice.getsessionbyid(this.uid).then(res => {
      this.getsessions=res;
      console.log(this.getsessions);
    })
    
    
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.facultyservice.deletetimetable(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/faculty/timetable']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }

}
