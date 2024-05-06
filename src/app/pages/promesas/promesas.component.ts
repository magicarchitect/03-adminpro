import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    // const promesa = new Promise( (resolve, reject) => {
    //   if (false){
    //     resolve("Hola desde Promesas");
    //   } else {
    //     reject("Algo ha salido mal.");
    //   }
      
    // });

    // promesa.then((mensaje)=>{ 
    //   console.log(mensaje)
    // })
    // .catch((mensaje) => {
    //   console.log(mensaje);
    // });

    // console.log("Fin OnInit PromesasComponent");    
  }

  getUsuarios(){
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));
    });
  }

}
