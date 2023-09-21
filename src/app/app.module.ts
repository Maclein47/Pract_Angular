import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videoJuego/videojuego.component';
<<<<<<< Updated upstream
import { ZapatillasComponent } from './zapatillas/zapatillas';

=======
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
