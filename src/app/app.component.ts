import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string = 'Capitan America';
  nombre2: string = 'IvanA MOyano';
  arreglo   = [1,2,5,6,7,8,9];
  PI        : number = Math.PI;
  porcentaje: number = 0.234;
  salario   :number= 12345;
  fecha:Date = new Date;
  idioma: string = 'es';
  videoUrl:string ='https://www.youtube.com/embed/QJVn00sfNjM';


  valorPromesa= new Promise<string>((resolve) =>{
    setTimeout(() =>{
    resolve('llegó la data');
    },4500);
  })
  heroe= {
    nombre:'logan',
    clave:'wolverine',
    edad:500,
    direccion:{
      calle:'primera',
      casa:20
    }
  }
}
