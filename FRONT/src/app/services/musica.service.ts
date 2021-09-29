import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Musica } from "../Models/musica"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  
  private baseURL = "http://localhost:5000/api/music";

  constructor(private http: HttpClient) {}

  list(): Observable<Musica[]> {
      return this.http.get<Musica[]>(`${this.baseURL}/listMusics`);
  }

  create(musica: Musica): Observable<Musica> {
      return this.http.post<Musica>(`${this.baseURL}/create`, musica);
  }

}
