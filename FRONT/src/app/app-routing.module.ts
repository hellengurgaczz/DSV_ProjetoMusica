import { CadastrarMusicaComponent } from './components/views/cadastrar-musica/cadastrar-musica.component';
import { ListarMusicaComponent } from './components/views/listar-musica/listar-musica.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListarMusicaComponent
  },
  {
    path: "musica/listarMusicas",
    component: ListarMusicaComponent
  },
  {
    path: "musica/cadastrar",
    component: CadastrarMusicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
