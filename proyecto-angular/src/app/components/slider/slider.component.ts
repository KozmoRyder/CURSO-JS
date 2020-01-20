import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
declare var $:any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Output() conseguirAutor = new EventEmitter();
  public autor:any;
  constructor() { 
    this.autor = {
      nombre: "Lautaro Biondi",
      email: "lautarobiondi@hotmail.com"
  }
  }
  ngOnInit() {
    $('.galeria').bxSlider({
      mode: 'fade',
      slideWidth: 600,
      adaptiveHeight: false
    });
  }
  lanzar(event){
    console.log('Evento Lanzado');
    
    event=this.conseguirAutor.emit(this.autor);
  }

}
