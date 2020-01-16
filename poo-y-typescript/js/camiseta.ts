//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de "+logo)
        }
    }
}




//Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    //Propiedades (Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (Funciones o Acciones del objeto)
    constructor(color:string,modelo:string,marca:string,talla:string,precio:number){
        this.color = color,
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }



    public setColor(color:string){
        this.color = color;
    }
    public getColor(){
        this.color;
    }
}

//Clase Hija
class Sudadera extends Camiseta{
    public capucha:boolean;
    
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha
    };
}



var camiseta = new Camiseta("1234","gaosf","afasf","gsaassaf",14);
camiseta.estampacion();

var sudadera_nike = new Sudadera("Rojo","Manga Larga","Nike","L",14);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris")


console.log(sudadera_nike);

