import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  
  title = 'pipes';

  nombre="Jorge";
  nombre2="JORGE Daniel Bran Bonilla";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  porcentaje = 0.234;

  heroe =
  {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion :
    {
      calle : "Primera calle",
      casa : "casa no. 19"
    }
  }

  valorDePromesa = new Promise((resolve,reject) => 
  {
    setTimeout( () => resolve('LLegó la data!'), 3500 );
  }
  )

fecha = new Date();

}
