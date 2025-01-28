import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Declara el componente
  ],
  imports: [
    BrowserModule, // Importa el módulo necesario para aplicaciones web
  ],
  bootstrap: [AppComponent], // Define el componente principal para arrancar la app
})
export class AppModule {}
