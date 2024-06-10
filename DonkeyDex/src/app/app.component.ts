import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { SearchComponent } from './search/search.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsListComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonkeyDex';
}
