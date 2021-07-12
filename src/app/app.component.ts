import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCRUD';

  constructor(private router:Router) {
  }

  mostrarListado() {
    this.router.navigate(['listado']);
  }

  mostrarAlta() {
    this.router.navigate(['alta']);
  }

  mostrarModificar() {
    this.router.navigate(['modificar']);
  }
}
