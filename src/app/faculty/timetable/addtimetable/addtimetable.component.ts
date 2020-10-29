import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyService } from '../../faculty.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addtimetable',
  templateUrl: './addtimetable.component.html',
  styleUrls: ['./addtimetable.component.css']
})
export class AddtimetableComponent implements OnInit {
myForm:FormGroup;
getbatchbyid : Array<any>=[];
uid=0;

  constructor(private facultyservice : FacultyService,private messageService: MessageService) { }

  ngOnInit() {
    this.uid=parseInt(sessionStorage.getItem('uid'));
    console.log(this.uid);
    this.facultyservice.getBatchUserId(this.uid).then(res => {
      this.getbatchbyid = res;
      console.log(this.getbatchbyid);
      
    })
    this.myForm = new FormGroup({
      uid:new FormControl(this.uid,Validators.required),
      stime:new FormControl('',Validators.required),
      etime:new FormControl('',Validators.required),
      mon:new FormControl('',Validators.required),
      tue:new FormControl('',Validators.required),
      wed:new FormControl('',Validators.required),
      thu:new FormControl('',Validators.required),
      fri:new FormControl('',Validators.required),
      sat:new FormControl('',Validators.required),
      sun:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    })
  }
submit(){
  this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
      this.facultyservice.addsession(this.myForm.value).subscribe(res => {
        console.log(res)
      })
}
}
