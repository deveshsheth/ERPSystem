import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {
  myForm: FormGroup;
  courses = {}
  courseid = 0;
  constructor(private courseservice: CoursesService, private route: ActivatedRoute, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {

    this.courseid = this.route.snapshot.params.id;
    if (this.courseid) {

      console.log("coursesid " + this.courseid);
      this.courseservice.getcoursesById(this.courseid).then(res => {
        this.courses = res;

        console.log(this.courses)

        this.myForm = new FormGroup({
          cid: new FormControl(this.courses[0].cid, Validators.required),
          ccode: new FormControl(this.courses[0].ccode, Validators.required),
          cname: new FormControl(this.courses[0].cname, Validators.required),
          status: new FormControl(this.courses[0].status, Validators.required)
        });
      })
    }

    this.myForm = new FormGroup({
      ccode: new FormControl('', Validators.required),
      cname: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }
  submit() {
    if (this.courseid) {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'updated Successfully' });
      this.courseservice.updatecourses(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/slidebar/hr/courses']);
    } else {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Added Successfully' });
      this.courseservice.addcourses(this.myForm.value).subscribe(res => {
        console.log(res)
      })
    }

  }
}
