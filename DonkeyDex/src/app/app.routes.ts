import { Routes } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'detail/:name', component: DetailPokemonComponent },
  { path: '**', redirectTo: '/pokemons' }

];
