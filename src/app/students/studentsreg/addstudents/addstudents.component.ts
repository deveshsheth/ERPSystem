import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../students.service';


@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
myForm:FormGroup;
students={};
stuid=0;
imagePath:string;
fileToUpload: File = null;
uploadFiles = [];
updatestudents:{}
  constructor(private studentservice : StudentsService, private route: ActivatedRoute, private rut: Router,private messageService: MessageService) { }

  ngOnInit() {

    this.stuid = this.route.snapshot.params.id;
    if (this.stuid) {

      console.log("studentsid " + this.stuid);
       this.studentservice.getstudentsById(this.stuid).then(res => {
        this.students = res;

        console.log(this.students)

        this.myForm = new FormGroup({
          sid:new FormControl(this.students[0].sid,Validators.required),
          scode:new FormControl(this.students[0].scode,Validators.required),
          fn:new FormControl(this.students[0].fn,Validators.required),
          mn:new FormControl(this.students[0].mn,Validators.required),
          ln:new FormControl(this.students[0].ln,Validators.required),
          gender:new FormControl(this.students[0].gender,Validators.required),
          address:new FormControl(this.students[0].address,Validators.required),
          dob:new FormControl(this.students[0].dob,Validators.required),
          doj:new FormControl(this.students[0].doj,Validators.required),
          qualification:new FormControl(this.students[0].qualification,Validators.required),
          collegename:new FormControl(this.students[0].collegename,Validators.required),
          ref:new FormControl(this.students[0].ref,Validators.required),
          mobile:new FormControl(this.students[0].mobile,Validators.required),
          email:new FormControl(this.students[0].email,Validators.required),
          inqdetail:new FormControl(this.students[0].inqdetail,Validators.required),
          typeofstudent:new FormControl(this.students[0].typeofstudent,Validators.required),
          status:new FormControl(this.students[0].status,Validators.required),
          image:new FormControl(this.uploadFiles),
        })
        this.imagePath = this.students[0].image;
      })
    }

    this.myForm = new FormGroup({
      scode:new FormControl('',Validators.required),
      fn:new FormControl('',Validators.required),
      mn:new FormControl('',Validators.required),
      ln:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      dob:new FormControl('',Validators.required),
      doj:new FormControl('',Validators.required),
      qualification:new FormControl('',Validators.required),
      collegename:new FormControl('',Validators.required),
      ref:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      inqdetail:new FormControl('',Validators.required),
      typeofstudent:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      image:new FormControl(this.uploadFiles)
    })
  }
  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.fileToUpload = files.item(0);
      this.studentservice.postFile(files.item(0)).subscribe(i => {
        console.log("imagename" + i["name"]);
        this.uploadFiles.push(i["name"]);
      })
    }
  }
  submit()
  {
    if (this.stuid) {
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'updated Successfully'});
      this.studentservice.updatestudents(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/slidebar/student/students']);
    } else {
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Added Successfully'});
      this.studentservice.addstudents(this.myForm.value).subscribe(res => {
        console.log(res)
      })
    }
    
  }
}
