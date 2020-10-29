import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students/students.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addclub',
  templateUrl: './addclub.component.html',
  styleUrls: ['./addclub.component.css']
})
export class AddclubComponent implements OnInit {
  clubbatch:{};
  clubstudent:{}
  myForm:FormGroup;
  constructor(private studentservice: StudentsService,private messageservice: MessageService) { }

  ngOnInit() {

    this.studentservice.getclubbatch().then(res => {
      this.clubbatch = res;
    })

    this.studentservice.getclubstudent().then(res => {
      this.clubstudent= res;
    })
    this.myForm = new FormGroup({
      bid:new FormControl('',Validators.required),
      sid:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    })
  }
submit()
{
  
  this.studentservice.addbatchstudent(this.myForm.value).subscribe(res => {
    console.log(res);
  })
  
}
}
