import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})
export class HomeComponent implements OnInit{
    
    public titulo;

    constructor(){
        this.titulo = "Bienvenido a AppTVFullStackNg";
    }

    ngOnInit(): void {
        
    }

}