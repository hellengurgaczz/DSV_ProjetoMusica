import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMusicaComponent } from './components/views/listar-musica/listar-musica.component';
import { CadastrarMusicaComponent } from './components/views/cadastrar-musica/cadastrar-musica.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarMusicaComponent,
    CadastrarMusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
