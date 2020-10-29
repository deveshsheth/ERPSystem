import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students/students.service';

@Component({
  selector: 'app-onetoonesb',
  templateUrl: './onetoonesb.component.html',
  styleUrls: ['./onetoonesb.component.css']
})
export class OnetoonesbComponent implements OnInit {
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
