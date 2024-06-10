import { Component, Output, EventEmitter } from '@angular/core';
import { FetchPokemonService } from '../fetch-pokemon.service';

@Component({
  selector: 'app-filter-type',
  standalone: true,
  imports: [],
  templateUrl: './filter-type.component.html',
  styleUrl: './filter-type.component.css'
})
export class FilterTypeComponent {
  pokemonTypes: string[] = [];
  @Output() typeSelected = new EventEmitter();

  constructor(private fetchPokemonService: FetchPokemonService) {}

  ngOnInit(): void {
    this.fetchPokemonService.getTypes().subscribe(response => {
      this.pokemonTypes = response.results.map(type => type.name);
    });
  }

  onTypeSelected(type: string): void {
    this.typeSelected.emit(type);
  }
}

