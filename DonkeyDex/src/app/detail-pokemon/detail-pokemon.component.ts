import { Component, OnInit } from '@angular/core';
import { FetchPokemonService } from '../fetch-pokemon.service';
import { EvolutionChain, Pokemon, Moves, PokemonSpecies, Abilities, Stats, EvolutionDetails} from '../pokemon/models.ts/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { FormatIdPipe } from '../format-id.pipe';
@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, FormatIdPipe],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit{
pokemon : Pokemon;
evolutionChain: EvolutionDetails[] = [];
  evolutionImages: { name: string, image: string }[] = [];
pokemonSpecies : PokemonSpecies;
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

          // Récupérer les détails d'évolution
          this.fetchPokemonService.getPokemonsSpecies(this.pokemon.id.toString()).subscribe(species => {
            const evolutionChainId = this.extractEvolutionChainId(species.evolution_chain.url);
            this.fetchPokemonService.getPokemonsEvolution(evolutionChainId).subscribe(evolutionChain => {
              this.evolutionChain = this.flattenEvolutionChain(evolutionChain.chain);

              // Récupérer les images pour chaque Pokémon dans la chaîne d'évolution
              this.evolutionChain.forEach(evolutionDetail => {
                this.fetchPokemonService.getPokemonsByName(evolutionDetail.species.name).subscribe(pokemon => {
                  this.evolutionImages.push({ name: pokemon.name, image: pokemon.sprites.front_default });
                });
              });
            });
          });
        }, error => console.log('Error Occurred:', error));
      }
    });
  }

  private extractEvolutionChainId(url: string): number {
    // Extraire l'ID de la chaîne d'évolution à partir de l'URL :Divise l'URL par les / et extrait l'avant-dernier élément, qui est l'ID de la chaîne d'évolution.
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);  }

  private flattenEvolutionChain(chain: EvolutionDetails): EvolutionDetails[] {
    // Fonction récursive pour créer une liste plate de la chaîne d'évolution
    const evolutionDetails: EvolutionDetails[] = [];

    const traverse = (details: EvolutionDetails) => {
      evolutionDetails.push(details);// Ajouter le pokemon actuel à la liste plate
      if (details.evolves_to) {// si le pokemon évolue en un ou plusieurs autres pokemon
        details.evolves_to.forEach(evolution => traverse(evolution));// parcourir récursivement chaque évolution
      }
    };
    traverse(chain);
    return evolutionDetails;
  }
}
