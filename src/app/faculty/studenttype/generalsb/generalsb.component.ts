import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-generalsb',
  templateUrl: './generalsb.component.html',
  styleUrls: ['./generalsb.component.css']
})
export class GeneralsbComponent implements OnInit {

  genbatch: {};
  genstudent: {};
  myForm: FormGroup;
  constructor(private studentservice: StudentsService, private route: ActivatedRoute, private messageservice: MessageService, private rut: Router) { }

  ngOnInit() {
    this.studentservice.getgenbatch().then(res => {
      this.genbatch = res;
    })
    this.studentservice.getgenstudent().then(res => {
      this.genstudent = res;
    })



    this.myForm = new FormGroup({
      bid: new FormControl('', Validators.required),
      sid: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  submit() {
   
      this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
      this.studentservice.addbatchstudent(this.myForm.value).subscribe(res => {
        console.log(res);
      })

  }

}
