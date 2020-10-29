import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup;

  constructor(private loginservice:LoginService,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
submit()
{
  this.loginservice.getlogin(this.myForm.value).subscribe(res => {
    console.log(res);
    console.log("depId"+res.data[0].did);
    if(res['data'] != '')
    {
      if(res.data[0].did ==9)
      {
        sessionStorage.setItem("islogin","true");
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome To Admin'});
        this.rut.navigate(['/slidebar/admin']);
        sessionStorage.setItem('uid',res.data[0].uid);
      }else if(res.data[0].did == 10)
      {
        sessionStorage.setItem("islogin","true");
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome To HR'});
        this.rut.navigate(['/slidebar/hr']);
        sessionStorage.setItem('uid',res.data[0].uid);
      }else if(res.data[0].did == 11)
      {
        if(res.data[0].uid==7)
        {
          sessionStorage.setItem("islogin",'true');
          sessionStorage.setItem('uid',res.data[0].uid);
          this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome To Faculty'});
          this.rut.navigate(['/slidebar/faculty'])
        }
        else if(res.data[0].uid==9)
        {
          sessionStorage.setItem("islogin",'true');
          sessionStorage.setItem('uid',res.data[0].uid);
          this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome To Faculty'});
          this.rut.navigate(['/slidebar/faculty'])
        }
        // sessionStorage.setItem("islogin","true");
        // this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome To Faculty'});
        // this.rut.navigate(['/slidebar/faculty']);
        // sessionStorage.setItem('uid',res.data[0].uid);
      }else if(res.data[0].did == 13)
      {
        sessionStorage.setItem("islogin","true");
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome To Students'});
        this.rut.navigate(['/slidebar/students']);
        sessionStorage.setItem('uid',res.data[0].uid);
      }else{
       
        console.log("error")
        // this.messageService.add({severity:'error', summary:'Error Message', detail:'Validation failed'});
      }
    }else{
      this.messageService.add({severity:'error', summary:'Error Message', detail:'Validation failed'});
        console.log("error")
    }
  })
 
}
}
