import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students/students.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-batchstudent',
  templateUrl: './batchstudent.component.html',
  styleUrls: ['./batchstudent.component.css']
})
export class BatchstudentComponent implements OnInit {

  batchstudentid = 0;
  batchstudent: Array<any> = [];
  addstudent: {}
  sid = 0
  myForm: FormGroup;
  getemailid: Array<any> = [];
  public subscription: Subscription;
  constructor(private facultyservice: FacultyService, private route: ActivatedRoute, private studentservice: StudentsService,private messageService:MessageService) { }

  ngOnInit() {
    this.batchstudentid = this.route.snapshot.params.bid;
    this.facultyservice.getmanagebatchstudent(this.batchstudentid).then(res => {
      this.batchstudent = res;
      if (this.batchstudent[0].typeofstudent == 'Club') {
        this.studentservice.getclubstudent().then(res => {
          this.addstudent = res;
        })
      } else if (this.batchstudent[0].typeofstudent == 'General') {
        this.studentservice.getgenstudent().then(res => {
          this.addstudent = res;
        })
      } else if (this.batchstudent[0].typeofstudent == 'OneToOne') {
        this.studentservice.getonetoonestudent().then(res => {
          this.addstudent = res;
        })
      }
    })

    this.myForm = new FormGroup({
      bid: new FormControl(this.batchstudentid, Validators.required),
      sid: new FormControl('', Validators.required),
      status: new FormControl('Active', Validators.required)
    })
  }
  getemail(event) {
    this.sid = event.target.value;
    console.log("ssid" + this.sid)
    this.facultyservice.getemailstudent(this.sid).then(res => {
      this.getemailid = res;
      // console.log("Email :-   " + this.getemailid[0].email);
      // console.log("GroupLink :-   " + this.getemailid[0].grplink);
      // console.log(this.getemailid[0]);
      // console.log(res);

    })

  }
  sendemail(value) {
    this.facultyservice.getemailstudent(value).then(res => {
      this.getemailid = res;
      console.log(this.getemailid[0].grplink + "emailsend");
      this.subscription = this.facultyservice.sendEmail(this.getemailid[0]).
        subscribe(data => {
          let msg = data['message']
          alert(msg);
          
        }, error => {
          console.error(error, "error");
        });
    })
  }
  submit() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
    this.studentservice.addbatchstudent(this.myForm.value).subscribe(res => {
      console.log(res);
    })
  }

}

