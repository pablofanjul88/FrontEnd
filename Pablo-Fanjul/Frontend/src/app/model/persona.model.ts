export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String,apellido: string, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}