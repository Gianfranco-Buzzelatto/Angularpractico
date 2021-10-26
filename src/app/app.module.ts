import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { ListaDeEmpleadosComponent } from './core/layout/lista-de-empleados/lista-de-empleados.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaDeEmpleadosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
