import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musica.service'; 

@Component({
  selector: 'app-listar-musica',
  templateUrl: './listar-musica.component.html',
  styleUrls: ['./listar-musica.component.css']
})
export class ListarMusicaComponent implements OnInit {

  musicas: Musica[] = [];

  constructor(private service: MusicaService) { }

  ngOnInit(): void {
    this.service.list().subscribe((musicas) => {
      this.musicas = musicas;
      for (let musica of musicas) {
          console.log(musica);
      }
      })
  }

}
