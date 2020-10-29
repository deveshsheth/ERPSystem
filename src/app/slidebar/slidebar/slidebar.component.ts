import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsloginService } from '../islogin.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
uid=0;
  constructor(private rut:Router,private islogin:IsloginService) { }

  ngOnInit() {
  }

  get isloginhr() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid==6)
    {
      return this.islogin.islogin;
    }

  }

  get isloginadmin() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid==5)
    {
      return this.islogin.islogin;
    }
  }

  get isloginfaculty() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid==7)
    {
      return this.islogin.islogin;
    }
    else if(this.uid==9){
      return this.islogin.islogin;

    }
  }

  get isloginstudent() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid==8)
    {
      return this.islogin.islogin;
    }
  }
  
logout(){
  sessionStorage.clear();
this.rut.navigate(['/login'])
}
}
