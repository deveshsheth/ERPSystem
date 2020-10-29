import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PositionsService } from '../positions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addpositions',
  templateUrl: './addpositions.component.html',
  styleUrls: ['./addpositions.component.css']
})
export class AddpositionsComponent implements OnInit {
  positions = {}
  id = 0;
  myForm: FormGroup;
  constructor(private posservice: PositionsService, private route: ActivatedRoute, private rut: Router,private messageService: MessageService) { }

   ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.id) {

      console.log("positionsid " + this.id);
       this.posservice.getpositionsById(this.id).then(res => {
        this.positions = res;

        console.log(this.positions)

        this.myForm = new FormGroup({
          posid: new FormControl(this.positions[0].posid, Validators.required),
          poscode: new FormControl(this.positions[0].poscode, Validators.required),
          posname: new FormControl(this.positions[0].posname, Validators.required),
          posshort: new FormControl(this.positions[0].posshort, Validators.required),
          poslevel: new FormControl(this.positions[0].poslevel, Validators.required),
          description: new FormControl(this.positions[0].description, Validators.required),
          status: new FormControl(this.positions[0].status, Validators.required)
        });
      })
    }
    this.myForm = new FormGroup({
      poscode: new FormControl('', Validators.required),
      posname: new FormControl('', Validators.required),
      posshort: new FormControl('', Validators.required),
      poslevel: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
    
  }
  submit() {
    if (this.id) {
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'updated Successfully'});
      this.posservice.updatepositions(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/slidebar/hr/positions']);
    } else {
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Added Successfully'});
      this.posservice.addpositions(this.myForm.value).subscribe(res => {
        console.log(res)
      })
    }


  }
}



