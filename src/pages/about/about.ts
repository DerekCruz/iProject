import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 searchQuery:string ="";
 item:string[];

  constructor(public navCtrl: NavController ) {
        this.initializeItems();
   }
initializeItems(){
  this.item = ['Apple','banana','Oranges',];
  }

getItems(ev:any){
  this.initializeItems();
  const val = ev.target.value;
 
  if(val && val.trim()!=''){
    this.item=this.item.filter((item)=>{
      return (item.toLowerCase().indexOf(val.toLowerCase()) >-1);   
    })
     }
  }
}
  
