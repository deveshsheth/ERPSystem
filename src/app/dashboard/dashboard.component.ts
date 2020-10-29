import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
student:{};
faculties:{};
courses:{};
  constructor(private dashboardservice:DashboardService) { }

  ngOnInit() {
    this.dashboardservice.countstudent().then(res=>{
      this.student=res[0].stud;
    })
    this.dashboardservice.countfaculties().then(res => {
      this.faculties=res[0].fac;
    })
    this.dashboardservice.countcourses().then(res=>{
      this.courses=res[0].course;
    })
  }

}
