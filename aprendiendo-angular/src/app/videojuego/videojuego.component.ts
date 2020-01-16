import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';

@Component({
    selector: "videojuego",
    templateUrl: `./videojuego.component.html`
})
export class VideojuegoComponent implements OnInit, DoCheck,OnDestroy {
    public titulo: string;
    public listado: string;



    constructor() {
        this.titulo = "Componente de videojuegos";

  //      console.log('Se ha cargado el componente videojuego.component');

    }

    ngOnInit(){
 //       console.log('OnInit ejecutado');
    }

    ngDoCheck(){
  //      console.log('DoCheck ejecutado');
    }

    ngOnDestroy(){
  //      console.log('OnDestroyEjecutado')
    }


    cambiarTitulo(){
        this.titulo='nuevo titulo del componente'
    }
}