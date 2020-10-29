import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-adddepartments',
  templateUrl: './adddepartments.component.html',
  styleUrls: ['./adddepartments.component.css']
})
export class AdddepartmentsComponent implements OnInit {
  myForm:FormGroup;
  departments = {}
  depid = 0;
  constructor(private depservice:DepartmentsService, private route: ActivatedRoute, private rut: Router,private messageService: MessageService) { }

  ngOnInit() {

    this.depid = this.route.snapshot.params.id;
    if (this.depid) {

      console.log("departmentsid " + this.depid);
       this.depservice.getdepartmentsById(this.depid).then(res => {
        this.departments = res;

        console.log(this.departments)

        this.myForm = new FormGroup({
          did: new FormControl(this.departments[0].did, Validators.required),
          deptcode: new FormControl(this.departments[0].deptcode, Validators.required),
          deptname: new FormControl(this.departments[0].deptname, Validators.required),
          deptshort: new FormControl(this.departments[0].deptshort, Validators.required),
          deptlevel: new FormControl(this.departments[0].deptlevel, Validators.required),
          positiondesc: new FormControl(this.departments[0].positiondesc, Validators.required),
          status: new FormControl(this.departments[0].status, Validators.required)
        });
      })
    }

    this.myForm = new FormGroup({
      deptcode: new FormControl('',Validators.required),
      deptname:new FormControl('',Validators.required),
      deptshort:new FormControl('',Validators.required),
      deptlevel:new FormControl('',Validators.required),
      positiondesc:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    })
  }
submit()
{
  if (this.depid) {
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'updated Successfully'});
    this.depservice.updatedepartments(this.myForm.value).subscribe(res => {
      console.log(res);
    })
    this.rut.navigate(['/slidebar/hr/departments']);
  } else {
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Added Successfully'});
    this.depservice.adddepartments(this.myForm.value).subscribe(res => {
      console.log(res)
    })
  }
  
}
}
