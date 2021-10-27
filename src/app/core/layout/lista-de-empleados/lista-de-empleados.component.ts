import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-empleados',
  templateUrl: './lista-de-empleados.component.html',
  styleUrls: ['./lista-de-empleados.component.css']
})
export class ListaDeEmpleadosComponent {
  empleados: Array<{ id: number, nombre: string, edad: number }> = [
    { id: 1, nombre: 'Gianf', edad: 21 },
    { id: 2, nombre: 'Agustin', edad: 20},
    { id: 3, nombre: 'Roberto', edad: 14},
    { id: 4, nombre: 'Ramiro', edad: 17},
    { id: 5, nombre: 'Gabriel', edad: 18},
    { id: 6, nombre: 'Ricardo', edad: 26 },
    { id: 7, nombre: 'Nicolas', edad: 20},
    { id: 8, nombre: 'Gaston', edad: 40},
    { id: 9, nombre: 'Nacho', edad: 36},
    { id: 10, nombre: 'Leo', edad: 28},
  ];
  
  buscarEmple: string ='';
  filterUser : Array<{id: number; nombre : string; edad:number}> =
    this.empleados;
    headlerInput(e : any){
      this.buscarEmple = e.target.value;
    }
  button(){
    this.filterUser = this.empleados.filter((empleado) => empleado.nombre === this.buscarEmple);
  }

}
