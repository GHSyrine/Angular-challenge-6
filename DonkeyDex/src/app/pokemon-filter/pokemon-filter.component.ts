import { Component, Output, EventEmitter } from '@angular/core';
import { FetchPokemonService } from '../fetch-pokemon.service';
import { Type } from '../pokemon/models.ts/pokemon.model';

@Component({
  selector: 'app-pokemon-filter',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-filter.component.html',
  styleUrl: './pokemon-filter.component.css'
})
export class PokemonFilterComponent {
type : Type[] = [];
@Output() selectedType = new EventEmitter();

constructor (private fetchPokemonService : FetchPokemonService){}

ngOnit(){
  this.fetchPokemonService.getTypes().subscribe(response => {
    this.type = response.results;
  });
}
onSlectedType(type: string){
  this.selectedType.emit(type);
}
}
