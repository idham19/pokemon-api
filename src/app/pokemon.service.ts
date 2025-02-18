import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private allPokemon:any = [];
  private squad: any = [];
  private squadSubject = new BehaviorSubject<any>(this.squad);
  squad$ = this.squadSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.fetchPokemon();
  }
  
  fetchPokemon() {
    this.apiService.getPokemonList().subscribe((response) => {
      this.allPokemon = response.results.map((p, index) => ({
        id: index + 1,
        name: p.name
      }));
    });
  }

  getAllPokemon() {
    return this.allPokemon;
  }

  addToSquad(pokemon: any) {
    // Extract the ID from the URL if it isn't already set
    const pokemonWithId = { 
      ...pokemon, 
      id: pokemon.url ? pokemon.url.split('/')[6] : pokemon.id 
    };
    
    console.log('Trying to add to squad:', pokemonWithId);
    
    if (this.squad.length < 6 && !this.squad.find((p: { id: any; }) => p.id === pokemonWithId.id)) {
      this.squad = [...this.squad, pokemonWithId];
      console.log('Squad after addition:', this.squad);
      this.squadSubject.next([...this.squad]);
    } else {
      console.log('Squad full or duplicate Pokémon');
    }
  }
  
  

  removeFromSquad(pokemon: any) {
    this.squad = this.squad.filter((p: { id: any; }) => p.id !== pokemon.id);
    this.squadSubject.next(this.squad);
  }
}
