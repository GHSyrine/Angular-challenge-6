import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchForm = new FormGroup ( {
    searchControl : new FormControl('')
  }
)

//Émet l'événement de recherche avec le terme de recherche sais

  @Output() search = new EventEmitter();

  constructor() {
    //valueChanges pour écouter les changements de valeur dans la barre de recherche.
    this.searchForm.controls.searchControl.valueChanges.pipe(
      //pour éviter des émissions d'événements trop fréquente
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.search.emit(value || '');
    });
  }
}
