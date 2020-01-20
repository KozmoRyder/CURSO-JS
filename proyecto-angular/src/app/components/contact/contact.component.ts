import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider:number;
  public autor: any;
  constructor() { }

  ngOnInit() {
   // console.log(document.querySelector('#texto').innerHTML);
    }
    getAutor(event){
      this.autor = event;
    }
  }


