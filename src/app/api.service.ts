import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = ' https://pokeapi.co/api/v2/pokemon?limit=151'; 

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.apiUrl);
  }
}
