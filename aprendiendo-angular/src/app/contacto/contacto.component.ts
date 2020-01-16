import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from '../models/contacto.usuario'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public ContactoUsuario: ContactoUsuario;
  constructor() { 
    this.ContactoUsuario = new ContactoUsuario('','','','')
  }

  ngOnInit() {
  }

  onSubmit(){
    //form.reset();
    console.log(this.ContactoUsuario);
  }
}
