import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonkeyDex';
}
