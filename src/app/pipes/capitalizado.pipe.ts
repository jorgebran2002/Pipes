import {Pipe, PipeTransform} from '@angular/core';
//import { type } from '@angular/compiler';

@Pipe
(
    {
        name : 'capitalizado'
    }
)

export class capitalizadoPipe implements PipeTransform
{
    transform(value: string, parametroTodasMayus: boolean = true ): string 
    {

        console.log('value ->', value);
        console.log('parametroTodasMayus -> ', parametroTodasMayus);

        value = value.toLowerCase();

        let nombres  = value.split(" ");


        if (parametroTodasMayus)
        {
            for (let i in nombres)
            {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }
        else
        {
            nombres[0] = nombres[0][0].toUpperCase()+nombres[0].substr(1);
        }



        //return "Hola mundo!";
        return nombres.join(" ");
    }
}