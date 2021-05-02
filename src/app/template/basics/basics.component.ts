import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;

  initForm = {
    product: '',
    price: 0,
    stock: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return  this.myForm?.controls.product?.invalid 
            && this.myForm?.controls.product?.touched //if the input has been touched
  }

  validPrice(): boolean {
    return this.myForm?.controls.price?.value < 0 
           && this.myForm?.controls.price?.touched;
  } 

  // submit( form: NgForm ) {
  //   console.log(form.value)
  // }
  save( ) {
    console.log( this.myForm );
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

}
