import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/hr/employees/employees.service';

import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DepartmentsService } from 'src/app/hr/departments/departments.service';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
myForm:FormGroup;
emplist:{};
deplist:{};
users = {};
usersid = 0;
  constructor(private depservice:DepartmentsService,private empservice:EmployeesService,private userservice:UsersService, private route: ActivatedRoute, private rut: Router,private messageService: MessageService) { }

  ngOnInit() {

    this.usersid = this.route.snapshot.params.id;
    if (this.usersid) {

      console.log("usersid " + this.usersid);
       this.userservice.getusersById(this.usersid).then(res => {
        this.users = res;

        console.log(this.users)

        this.myForm = new FormGroup({
          uid:new FormControl(this.users[0].uid,Validators.required),
          empid:new FormControl(this.users[0].empid,Validators.required),
          username:new FormControl(this.users[0].username,Validators.required),
          password:new FormControl(this.users[0].password,Validators.required),
          role:new FormControl(this.users[0].role,Validators.required),
          editiong:new FormControl(this.users[0].editiong,Validators.required),
          status:new FormControl(this.users[0].status,Validators.required),
          did:new FormControl(this.users[0].did,Validators.required)
        })
      })
    }


    this.myForm = new FormGroup({
      empid:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
      editiong:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      did:new FormControl('',Validators.required)
    })


    this.empservice.listemployees().then(res => {
      this.emplist = res;
    })
    this.depservice.listdepartments().then(res => {
      this.deplist = res;
    })

  }
  submit()
  {
    if (this.usersid) {
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'updated Successfully'});
      this.userservice.updateusers(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/slidebar/admin/users']);
    } else {
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Added Successfully'});
      this.userservice.addusers(this.myForm.value).subscribe(res => {
        console.log(res)
      })
    }
  
    
  }
}
