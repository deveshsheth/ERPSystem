import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students/students.service';

@Component({
  selector: 'app-addonetoone',
  templateUrl: './addonetoone.component.html',
  styleUrls: ['./addonetoone.component.css']
})
export class AddonetooneComponent implements OnInit {
  onetoonebatch:{}
  onetoonestudent:{}
  myForm:FormGroup;
  constructor(private studentservice:StudentsService) { }

  ngOnInit() {
    this.studentservice.getonetoonebatch().then(res => {
      this.onetoonebatch=res;
    })
    this.studentservice.getonetoonestudent().then(res => {
      this.onetoonestudent=res;
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
