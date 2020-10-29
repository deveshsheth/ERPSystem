import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/hr/courses/courses.service';
import { EmployeesService } from 'src/app/hr/employees/employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyService } from '../../faculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
courselist:{}
emplist:{}
myForm:FormGroup;
batches={};
batchid=0;
uid=0;
  constructor(private courseservice:CoursesService,private empservice:EmployeesService,
    private batchservice: FacultyService, private route: ActivatedRoute, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    this.batchid = this.route.snapshot.params.id;
    if (this.batchid) {

      console.log("batchesid " + this.batchid);
      this.batchservice.getbatchesById(this.batchid).then(res => {
        this.batches = res;

        console.log(this.batches)

        this.myForm = new FormGroup({
          bid:new FormControl(this.batches[0].bid,Validators.required),
          bcode:new FormControl(this.batches[0].bcode,Validators.required),
          bname:new FormControl(this.batches[0].bname,Validators.required),
          cid:new FormControl(this.batches[0].cid,Validators.required),
          startdate:new FormControl(this.batches[0].startdate,Validators.required),
          enddate:new FormControl(this.batches[0].enddate,Validators.required),
          starttime:new FormControl(this.batches[0].starttime,Validators.required),
          endtime:new FormControl(this.batches[0].endtime,Validators.required),
          status:new FormControl(this.batches[0].status,Validators.required),
          btype:new FormControl(this.batches[0].btype,Validators.required),
          grplink:new FormControl(this.batches[0].grplink,Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      bcode:new FormControl('',Validators.required),
      bname:new FormControl('',Validators.required),
      cid:new FormControl('',Validators.required),
      startdate:new FormControl('',Validators.required),
      enddate:new FormControl('',Validators.required),
      starttime:new FormControl('',Validators.required),
      endtime:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      uid:new FormControl(this.uid,Validators.required),
      btype:new FormControl('',Validators.required),
      grplink:new FormControl('',Validators.required)
    })

    this.courseservice.listcourses().then(res => {
      this.courselist = res;
    })
    this.empservice.listemployees().then(res => {
      this.emplist = res;
    })
  }

  submit() {
    if (this.batchid) {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'updated Successfully' });
      this.batchservice.updatebatches(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/slidebar/faculty/batch']);
    } else {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
      this.batchservice.addbatches(this.myForm.value).subscribe(res => {
        console.log(res)
      })
    }

  }

}
