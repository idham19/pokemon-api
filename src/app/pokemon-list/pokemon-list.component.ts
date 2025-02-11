import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface Pokemon {
  name: string;
  url: string;
}
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit{
  pokemonList: Pokemon[] = [];
  
 constructor(private apiSvc:ApiService){}

//  ngOnInit(){
//   this.apiSvc.fetchData().subscribe({
//     next: (response) => this.pokemotList = response,
//     error: (error) => console.error('Error fetching data:', error)
//   });
// }
ngOnInit() {
  this.apiSvc.getPokemonList().subscribe(response => {
    this.pokemonList = response.results;
  });
}
 }


