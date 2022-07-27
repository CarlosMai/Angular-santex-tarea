import { Component, OnInit } from '@angular/core';
import { InterfaceTarea } from './interface-tarea';     

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tarea1';

  nombre: string = '';
  costos: string = '';
  arregloInterface: InterfaceTarea[] = [];
  bono: boolean = true;

  mostrar(){
    this.bono = !this.bono;
  }
    

  ngOnInit(): void {
    this.arregloInterface = [
      {nombre: "lucas", costos: "4"},
      {nombre: "juan", costos: "5"},
      {nombre: "elbicho", costos: "7"}
    ]; 
  }

   
}

