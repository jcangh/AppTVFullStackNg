import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../services/recurso.service';
import { Recurso } from '../models/recurso';

@Component({
    selector: 'recurso',
    templateUrl: '../views/recurso-edit.html',
    providers: [RecursoService]
})
export class RecursoComponent implements OnInit{

    public titulo : string;
    public mensajeAlerta : string;
    public recurso: Recurso;

    constructor(private recursoService:RecursoService){
        this.titulo = "Agregar/Editar recurso";
        this.recurso = new Recurso("","",new Date(),false,"",1);
    }

    ngOnInit(): void {
            
    }

    guardarRecurso(){
        this.recursoService.guardarRecurso(this.recurso).subscribe(
            response =>{
                console.log(response);
                if (!response.recurso){
                    this.mensajeAlerta = 'El recurso no se ha podido guardar';
                }else{
                    this.mensajeAlerta = "El recurso se ha guardado correctamente";
                    this.recurso = new Recurso("","",new Date(),false,"",1);
                }
            },
            error =>{
                console.log(error);
                var errorMessage = <any>error;
                if (errorMessage != null){
                  var body = JSON.parse(error._body);
                  this.mensajeAlerta = body.message;
                }
            }
        );
    }

}