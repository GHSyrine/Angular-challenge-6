import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon/models.ts/pokemon.model';
import { TitleCasePipe } from '@angular/common';
import { RouterLink} from '@angular/router';
import { ColorCardDirective } from '../color-card.directive';


@Component({
  selector: 'app-pokemon-filter',
  standalone: true,
  imports: [TitleCasePipe, RouterLink, ColorCardDirective],
  templateUrl: './pokemon-filter.component.html',
  styleUrl: './pokemon-filter.component.css'
})
export class PokemonFilterComponent {
  // pour recevoir  la liste des Pokémon filtrés depuis PokemonsListComponent.
  @Input() pokemons: Pokemon[] = [];

  trackByPokemonId(index: number, pokemon: Pokemon): number {
    return pokemon.id;
  }
}
