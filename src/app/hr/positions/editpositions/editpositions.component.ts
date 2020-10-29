import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PositionsService } from '../positions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpositions',
  templateUrl: './editpositions.component.html',
  styleUrls: ['./editpositions.component.css']
})
export class EditpositionsComponent implements OnInit {
  myForm:FormGroup;

  constructor(private posservice : PositionsService) { }

 async ngOnInit() {


  }

}
