import { Component, Output, EventEmitter } from '@angular/core';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(searchTerm: string): void {
    this.search.emit(searchTerm);
  }
}

