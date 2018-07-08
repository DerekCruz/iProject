import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { getOrCreateNodeInjectorForNode } from '@angular/core/src/render3/di';


class info {
  name:String; 
  email:String;
  content:String;
}

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
public newInfo:info;
private todo : FormGroup;


  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {

    this.newInfo= new info();

      this.todo = this.formBuilder.group({
        name: ['', Validators.required],
        email: [''],
        content:[""],
      });
    
  
    }
    
    sendInfo(){
      console.log(this.newInfo);
    
  }
  logForm(){
    console.log(this.todo.value);
  }
}
