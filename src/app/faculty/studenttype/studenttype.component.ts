import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-studenttype',
  templateUrl: './studenttype.component.html',
  styleUrls: ['./studenttype.component.css']
})
export class StudenttypeComponent implements OnInit {

  // title = 'nodemailerDemo';
  // public subscription: Subscription;
  constructor() { }

  // infoForm = this.fb.group({
  //   name: ['', [
  //     Validators.required,
  //     Validators.minLength(3)
  //   ]
  //   ],
  //   email: ['', [
  //     Validators.required,
  //     Validators.email
  //   ]
  //   ]
  // });

  // get name() { return this.infoForm.get('name'); }
  // get email() { return this.infoForm.get('email'); }


  // sendMail() {
  //   console.log(this.infoForm.value);
  //   this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
  //   subscribe(data => {
  //     let msg = data['message']
  //     alert(msg);
     
  //   }, error => {
  //     console.error(error, "error");
  //   } );
  // }

  ngOnInit() {
  }
  // ngOnDestroy() {
  // }

}
