import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { EvolutionChain, Pokemon, PokemonListResponse, PokemonSpecies, Type } from './pokemon/models.ts/pokemon.model';
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

getPokemonsEvolution(id : number): Observable<EvolutionChain> {
  const url =`${API_URL}evolution-chain/${id}`;
  return this.http.get<EvolutionChain>(url);
}

getPokemonsSpecies(id : string): Observable<PokemonSpecies> {
  const url =`${API_URL}pokemon-species/${id}`;
  return this.http.get<PokemonSpecies>(url);
}

//Pour récupérer les pokémons par type
getPokemonsByType(type: string): Observable<any> {
  const url = `${API_URL}/type/${type}`;
  return this.http.get<any>(url);
}
//Pour récupérer tous les types de Pokémon disponibles
getTypes(): Observable<{ results: Type[] }> {
  const url = `${API_URL}/type`;
  return this.http.get<{ results: Type[] }>(url);
}
getAllPokemons(): Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(`${API_URL}/pokemon?limit=1000`);
}

}
