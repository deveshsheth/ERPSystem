import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../departments/departments.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PositionsService } from '../../positions/positions.service';
import { EmployeesService } from '../employees.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {
  deplist: {};
  imagePath:String;
  poslist:{};
  myForm: FormGroup;
  employees = {}
  empid = 0;
  fileToUpload:File=null;
  uploadedFiles=[];
  updateemp:{}
  constructor(private posservice:PositionsService,
     private route: ActivatedRoute, 
     private rut: Router,
    private depservice: DepartmentsService,
    private empservice:EmployeesService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.empid = this.route.snapshot.params.id;
    if (this.empid) {

      console.log("employeesid " + this.empid);
       this.empservice.getemployeesById(this.empid).then(res => {
        this.employees = res;

        console.log(this.employees)

        this.myForm = new FormGroup({
          empid: new FormControl(this.employees[0].empid, Validators.required),
          empcode: new FormControl(this.employees[0].empcode, Validators.required),
          ename: new FormControl(this.employees[0].ename, Validators.required),
          did: new FormControl(this.employees[0].did, Validators.required),
          posid: new FormControl(this.employees[0].posid, Validators.required),
          doj: new FormControl(this.employees[0].doj, Validators.required),
          qualification: new FormControl(this.employees[0].qualification, Validators.required),
          experience: new FormControl(this.employees[0].experience, Validators.required),
          gender: new FormControl(this.employees[0].gender, Validators.required),
          contact: new FormControl(this.employees[0].contact, Validators.required),
          email: new FormControl(this.employees[0].email, Validators.required),
          status: new FormControl(this.employees[0].status, Validators.required),
          enddate: new FormControl(this.employees[0].enddate, Validators.required),
          jobtype: new FormControl(this.employees[0].jobtype, Validators.required),
          image:new FormControl(this.uploadedFiles)
        });
        this.imagePath = this.employees[0].image;
      })
    }
    this.myForm = new FormGroup({
      empcode: new FormControl('', Validators.required),
      ename: new FormControl('', Validators.required),
      did: new FormControl('', Validators.required),
      posid: new FormControl('', Validators.required),
      doj: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      jobtype: new FormControl('', Validators.required),
      image:new FormControl(this.uploadedFiles)
    })
    this.depservice.listdepartments().then(res => {
      this.deplist = res;
    })
    this.posservice.listpositions().then(res => {
      this.poslist = res;
    })
  }
  handleFileInput(files:FileList)
  {
    if(files.length > 0) {
      this.fileToUpload = files.item(0);
      this.empservice.postFile(files.item(0)).subscribe(i => {
        console.log("imagename"+i["name"]);
        this.uploadedFiles.push(i["name"]);
      })
    }
  }
submit()
{
  if (this.empid) {
    
    this.empservice.updateemployees(this.myForm.value).subscribe(res => {
      console.log(res);
    })
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'updated Successfully'});

    this.rut.navigate(['/slidebar/hr/employees']);
  } else {
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Added Successfully'});
    this.empservice.addemployees(this.myForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
}

