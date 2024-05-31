import { Component, OnInit } from '@angular/core';
import { FetchPokemonService} from '../fetch-pokemon.service';
import { PokemonListResponse } from '../pokemon/models.ts/pokemon.model';
import { offset } from '@popperjs/core';


@Component({
  selector: 'app-pokemons-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent implements OnInit{
  pokemons : {name: string; url: string}[] = [];
  limit : number = 100;
  offset : number = 0;
  constructor(private fetchPokemonService : FetchPokemonService){}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.fetchPokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      this.pokemons = [...this.pokemons, ...response.results];
    });
  }

  loadMorePokemons(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }
}
