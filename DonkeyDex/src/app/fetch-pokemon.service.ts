import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { EvolutionChain, Pokemon, PokemonListResponse, PokemonSpecies } from './pokemon/models.ts/pokemon.model';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class FetchPokemonService {
  private pokemons : [] =[]


  private http = inject(HttpClient);

  constructor() { }

get Pokemons(): []{
  return this.pokemons;
}
getPokemons(limit : number, offset : number):Observable<PokemonListResponse>{
  const url = `${API_URL}/pokemon?limit=${limit}&offset=${offset}`;
  return this.http.get<PokemonListResponse>(url);
}

getPokemonsByName(name:string): Observable<Pokemon> {
  const url =`${API_URL}/pokemon/${name}`;
  return this.http.get<Pokemon>(url);
}

getPokemonsEvolution(pokemonId : string): Observable<EvolutionChain> {
  const url =`${API_URL}evoltion-chain/${pokemonId}`;
  return this.http.get<EvolutionChain>(url);
}

getPokemonsSpecies(pokemonId : string): Observable<PokemonSpecies> {
  const url =`${API_URL}pokemon-species/${pokemonId}`;
  return this.http.get<PokemonSpecies>(url);
}

}
