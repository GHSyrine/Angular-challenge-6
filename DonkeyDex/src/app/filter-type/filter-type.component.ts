import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Pokemon, Type } from '../pokemon/models.ts/pokemon.model';
import { FetchPokemonService } from '../fetch-pokemon.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-filter-type',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-type.component.html',
  styleUrl: './filter-type.component.css'
})
export class FilterTypeComponent implements OnInit {
  pokemons: Pokemon[] = [];

  types : Type[];
  pokemon : Pokemon[];
  selectedType : string = '';
  @Output() typeSelected = new EventEmitter();
constructor(private fetchPokemonService: FetchPokemonService){}

ngOnInit(): void{
  this.fetchPokemonService.getTypes().subscribe(response => {
    this.types = response.results.map((type: any) => type.name);
  });
}

onTypeSelect(event: Event): void {
  const target = event.target as HTMLSelectElement;
  const type = target?.value;
  if (type) {
    this.selectedType = type;
    this.typeSelected.emit(this.selectedType);
  }
}


}
