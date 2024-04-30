import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videoJuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
<<<<<<< HEAD
import { CalculadoraIVAComponent } from './calculadora-iva/calculadora-iva.component';
=======
import { PersonasComponent } from './personas/personas.component';
>>>>>>> c5e1285 (300434 - 21:37 - Punto de inicio de practicas varias)

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
<<<<<<< HEAD
    CalculadoraIVAComponent
=======
    PersonasComponent
>>>>>>> c5e1285 (300434 - 21:37 - Punto de inicio de practicas varias)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
