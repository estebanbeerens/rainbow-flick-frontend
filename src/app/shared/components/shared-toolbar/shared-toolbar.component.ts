import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-toolbar',
  templateUrl: './shared-toolbar.component.html',
  styleUrls: ['./shared-toolbar.component.scss'],
})
export class SharedToolbarComponent {
  searchbar: boolean = false;

  @Input() title: string = 'GEEN TITEL';
  @Input() hasBackButton: boolean = true;
  @Input() hasSearchButton: boolean = true;
  @Input() hasAddButton: boolean = true;

  @Output() onAddPressed = new EventEmitter();
  @Output() onSearchKeyup = new EventEmitter<any>();

  toggleSearchBar(): void {
    this.searchbar = !this.searchbar;
  }

  addPressed(): void {
    this.onAddPressed.emit();
  }

  keyUp(searchString: string): void {
    this.onSearchKeyup.emit(searchString);
  }
}
