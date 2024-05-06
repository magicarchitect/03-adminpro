import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    const promesa = new Promise( (resolve, reject) => {
      if (false){
        resolve("Hola desde Promesas");
      } else {
        reject("Algo ha salido mal.");
      }
      
    });

    promesa.then((mensaje)=>{ 
      console.log(mensaje)
    })
    .catch((mensaje) => {
      console.log(mensaje);
    });

    console.log("Fin OnInit PromesasComponent");    
  }



}
