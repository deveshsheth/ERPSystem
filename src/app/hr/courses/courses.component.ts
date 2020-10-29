import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courselist:{};
  constructor(private courseservice:CoursesService, private rut: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

 async ngOnInit() {
  await this.courseservice.listcourses().then(res => {
    this.courselist = res;
  })
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirm Message', detail: 'You have Successfully Deleted' });
        this.courseservice.deletecourses(value).subscribe(res => {
          console.log("res deleted....");
        })
        this.rut.navigate(['/slidebar/hr/courses']);

      },
      reject: () => {

        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];

      }
    });

  }
}
