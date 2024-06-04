import { Component, OnInit } from '@angular/core';
import { FetchPokemonService } from '../fetch-pokemon.service';
import { EvolutionChain, Pokemon, Moves, PokemonSpecies, Abilities, Stats} from '../pokemon/models.ts/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{
pokemon : Pokemon;

evolutionChain : EvolutionChain
pokemonSpecies : PokemonSpecies
abilities : Abilities
stats : Stats
moves : Moves

constructor(
  private fetchPokemonService: FetchPokemonService,
  private route : ActivatedRoute
){}

 ngOnInit(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];
      if (name) {
        this.fetchPokemonService.getPokemonsByName(name).subscribe(response => {
          this.pokemon = response;
        }, error => console.log('Error Occurred:', error));
      }
    });
  }
}



