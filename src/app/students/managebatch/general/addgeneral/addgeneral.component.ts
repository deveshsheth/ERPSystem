import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-addgeneral',
  templateUrl: './addgeneral.component.html',
  styleUrls: ['./addgeneral.component.css']
})
export class AddgeneralComponent implements OnInit {

  gen: {};
  genid = 0;
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

    this.genid = this.route.snapshot.params.id;
    if (this.genid) {

      console.log("GeneralBatchid " + this.genid);
      this.studentservice.getbatchstudentbyid(this.genid).then(res => {
        this.gen = res;

        console.log(this.gen)

        this.myForm = new FormGroup({
          bsid: new FormControl(this.gen[0].bsid, Validators.required),
          bid: new FormControl(this.gen[0].bid, Validators.required),
          sid: new FormControl(this.gen[0].sid, Validators.required),
          status: new FormControl(this.gen[0].status, Validators.required)
        });
      })
    }

    this.myForm = new FormGroup({
      bid: new FormControl('', Validators.required),
      sid: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.genid) {
      this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: 'updated Successfully' });
      this.studentservice.updatebatchstudent(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/slidebar/students/managebatch/general']);
    } else {
      this.messageservice.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
      this.studentservice.addbatchstudent(this.myForm.value).subscribe(res => {
        console.log(res);
      })
    }
  }
}