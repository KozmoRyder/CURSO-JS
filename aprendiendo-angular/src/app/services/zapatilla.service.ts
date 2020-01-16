import { Injectable } from '@angular/core';
import {Zapatilla} from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla("Reebok Classic",80,'Reebok',"Blanco",true),
            new Zapatilla("Nike Air Force 1",70,'Nike',"Negras",false),
            new Zapatilla("Nike Air Force 1",70,'Nike',"Negras",false),
            new Zapatilla("Nike Air Force 1",70,'Nike',"Negras",false)
        ];
    }
    getTexto(){
        return "Hola Mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}