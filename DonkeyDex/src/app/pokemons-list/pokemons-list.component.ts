import { Component, OnInit } from '@angular/core';
import { FetchPokemonService} from '../fetch-pokemon.service';
import { Pokemon } from '../pokemon/models.ts/pokemon.model';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { ColorCardDirective } from '../color-card.directive';
import { PokemonFilterComponent } from '../pokemon-filter/pokemon-filter.component';
import { HeaderComponent } from '../header/header.component';
import { FilterTypeComponent } from '../filter-type/filter-type.component';
import { FormatIdPipe } from '../format-id.pipe';

@Component({
  selector: 'app-pokemons-list',
  standalone: true,
  imports: [ FilterTypeComponent, DetailPokemonComponent, RouterLink, TitleCasePipe, ColorCardDirective, PokemonFilterComponent, HeaderComponent, FormatIdPipe],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent implements OnInit{
  // liste complète des Pokémon chargés.
  pokemons: Pokemon[] = [];
  //liste des Pokémon filtrés en fonction du terme de recherche
  filteredPokemons: Pokemon[] = [];
  searchTerm: string = '';
  selectedType: string = '';
  limit: number = 100;
  offset: number = 0;

  constructor(private fetchPokemonService: FetchPokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    //appel au service pour obtenir la liste des pokemon
    this.fetchPokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      // Traitement de la réponse
      response.results.forEach(pokemonSummary => {
        //Appel au Service pour Obtenir les Détails de Chaque Pokémon:
        this.fetchPokemonService.getPokemonsByName(pokemonSummary.name).subscribe(pokemon => {
          //Mise à Jour des Listes de Pokémon:
          this.pokemons.push(pokemon);
          this.filteredPokemons = [...this.pokemons];
          this.applyFilters(); // Appliquer les filters après loading pokemons

        });
      });
    });
  }

  filterPokemon(searchTerm: string): void {
    this.searchTerm = searchTerm;
    if (searchTerm) {
      //filtrer la liste complète pokemons en fonction du terme de recherche.
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    } else {
      this.filteredPokemons = [...this.pokemons];
    }
  }

  onTypeSelected(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  applyFilters(): void {
    // Vérifie si un type a été sélectionné ou si le champ est vide
    if (this.selectedType === '' || this.selectedType === null) {
      // Si aucun type n'est sélectionné, ou si le champ est vide, affiche tous les Pokémon
      this.filteredPokemons = this.pokemons; // Aucun filtre n'est appliqué, donc affiche tous les Pokémon
    } else {
      // Si un type a été sélectionné
      // Utilise la méthode filter() pour filtrer les Pokémon en fonction du type sélectionné
      this.filteredPokemons = this.pokemons.filter(pokemon => {
        // La méthode some() vérifie si au moins un élément du tableau répond à la condition spécifiée
        return pokemon.types.some(pokemonType => {
          // Vérifie si le nom du type du Pokémon correspond au type sélectionné
          return pokemonType.type.name === this.selectedType;
        });
      });
    }



}

}
