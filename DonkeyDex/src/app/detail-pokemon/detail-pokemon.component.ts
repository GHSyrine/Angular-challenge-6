import { Component, OnInit } from '@angular/core';
import { FetchPokemonService } from '../fetch-pokemon.service';
import { EvolutionChain, Pokemon, PokemonSpecies} from '../pokemon/models.ts/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{
pokemon : Pokemon | undefined;

evolutionChain : EvolutionChain | undefined;
pokemonSpecies : PokemonSpecies | undefined



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



