import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  e1 = new Employee();

  constructor() { 

  }

  ngOnInit(): void {
    this.captchaReload();
  }

  submitted = false;
 onSubmit(){
   this.submitted = true;
   console.log("First name"+this.e1.firstName)
   console.log("Mobile no."+this.e1.numbers)
   
 }
 captchaReload(){
   this.e1.a=Math.floor(Math.random() * Math.floor(9))
   this.e1.b=Math.floor(Math.random() * Math.floor(9))
 }
 }

