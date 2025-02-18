import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  constructor(private pokemonService:PokemonService){}
  @Input() pokemon!:any;

  addToSquad(pokemon:any) {
    this.pokemonService.addToSquad(pokemon);
  }
}
