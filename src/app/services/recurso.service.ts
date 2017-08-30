import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class RecursoService{
    public url: string;

    constructor(
        private http: Http
    ){
        this.url = GLOBAL.url;
    }

    guardarRecurso(recurso){
        let recursoJson = JSON.stringify(recurso);
        let params = recursoJson;
        let headers = new Headers({
            'Content-Type': 'application/json'
        })
        let url = this.url + 'recurso';

        return this.http.post(url,params,{headers})
        .map(res => res.json());
    }
}