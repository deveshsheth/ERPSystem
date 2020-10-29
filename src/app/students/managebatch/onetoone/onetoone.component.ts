import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-onetoone',
  templateUrl: './onetoone.component.html',
  styleUrls: ['./onetoone.component.css']
})
export class OnetooneComponent implements OnInit {
onetoonelist:{}
  constructor(private studentservice:StudentsService) { }

 async ngOnInit() {
  await this.studentservice.listbatchotostudent().then(res=> {
    this.onetoonelist = res;
  })  
}

}
