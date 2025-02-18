import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-my-squad',
  templateUrl: './my-squad.component.html',
  styleUrls: ['./my-squad.component.css'],
})
export class MySquadComponent {
  squad$ = this.pokemonService.squad$;

  constructor(private pokemonService: PokemonService) {}
 
  removeFromSquad(pokemon: any) {
    this.pokemonService.removeFromSquad(pokemon);
  }
}
