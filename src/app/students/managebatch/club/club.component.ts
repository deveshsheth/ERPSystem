import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  clublist:{}
  constructor(private studentservice:StudentsService) { }

 async ngOnInit() {
   await this.studentservice.listbatchcstudent().then(res => {
     this.clublist = res;
   })
  }

}
