export class Recurso{

    constructor(
        public _id: string,
        public nombre: string,
        public fechaCreacion: Date,
        public estado: Boolean,
        public ruta: string,
        public orden: Number
    ){}
}