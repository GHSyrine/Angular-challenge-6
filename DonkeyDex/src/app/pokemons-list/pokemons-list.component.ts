import { Component, OnInit } from '@angular/core';
import { FetchPokemonService} from '../fetch-pokemon.service';
import { Pokemon, Type } from '../pokemon/models.ts/pokemon.model';
import { PokemonFilterComponent } from '../pokemon-filter/pokemon-filter.component';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
@Component({
  selector: 'app-pokemons-list',
  standalone: true,
  imports: [PokemonFilterComponent, DetailPokemonComponent],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent implements OnInit{
  pokemons : Pokemon[] = [];

  limit : number = 100;
  offset : number = 0;
  constructor(private fetchPokemonService : FetchPokemonService){}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.fetchPokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      response.results.forEach(pokemonSummary => {
        this.fetchPokemonService.getPokemonsByName(pokemonSummary.name).subscribe(pokemon => {
          this.pokemons.push(pokemon);
        });
      });
    });
  }

  loadMorePokemons(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }


  trackByPokemonId(index: number, pokemon: Pokemon): number {
    return pokemon.id;
  }

}


