import { Component } from '@angular/core';
import { FetchPokemonService } from '../fetch-pokemon.service';
import { Pokemon} from '../pokemon/models.ts/pokemon.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent {
pokemon : Pokemon | undefined;

constructor(
  private fetchPokemonService: FetchPokemonService,
  private route : ActivatedRoute
){}

ngOnInit(): void {
  const name = this.route.snapshot.paramMap.get('name');
  if (name) {
    this.fetchPokemonService.getPokemonsByName(name).subscribe(response => {
      this.pokemon = response;
    });
  }
}
}
