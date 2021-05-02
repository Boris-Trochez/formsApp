import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  //Alternative WAY
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('Your name here'),
  //   price: new FormControl(1500),
  //   stock: new FormControl(5)
  // });

  //with FormBuilder
  // ...{
  //   name: ['default field value', sync Validators, async validators]
  // }...

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ 0, [ Validators.required, Validators.min(0) ]],
    stock: [ 0, [ Validators.required, Validators.min(1) ] ]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  isInvalid( field: string ) {
    return this.myForm.controls[ field ].invalid 
            && this.myForm.controls[ field ].touched
  }

}

