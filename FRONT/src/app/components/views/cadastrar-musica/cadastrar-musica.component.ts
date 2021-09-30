import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Musica } from "src/app/models/musica"
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-cadastrar-musica',
  templateUrl: './cadastrar-musica.component.html',
  styleUrls: ['./cadastrar-musica.component.css']
})
export class CadastrarMusicaComponent implements OnInit {

  nome!: string;
  genero!: string;
  cantor!: string;
  lancamento!: number;

  constructor(private router: Router, private service: MusicaService) { }
    ngOnInit(): void {
  }

  cadastrar(): void{
    let musica: Musica = {
      musicName: this.nome,
      genre: this.genero,
      singer: this.cantor,
      release: this.lancamento
    }
    this.service.create(musica).subscribe(musica => {
      this.router.navigate(["musica/listarMusicas"]);
    })
  }

}
