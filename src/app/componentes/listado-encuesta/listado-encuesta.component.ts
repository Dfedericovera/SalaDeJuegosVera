import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-encuesta',
  standalone: true,
  imports: [],
  templateUrl: './listado-encuesta.component.html',
  styleUrl: './listado-encuesta.component.css'
})
export class ListadoEncuestaComponent {

  // Aquí puedes agregar la lógica necesaria para manejar el listado de encuestas
  // Por ejemplo, podrías inyectar un servicio que obtenga las encuestas desde una API o base de datos
  // y luego mostrarlas en la plantilla HTML.
  
  constructor() {
    // Inicialización del componente
  }

  ngOnInit(): void {
    // Lógica que se ejecuta al inicializar el componente
  }

}
