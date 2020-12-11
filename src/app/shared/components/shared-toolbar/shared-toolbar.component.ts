import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-shared-toolbar',
  templateUrl: './shared-toolbar.component.html',
  styleUrls: ['./shared-toolbar.component.scss']
})
export class SharedToolbarComponent {

  constructor(
    private location: Location
  ) {}

  searchbar: boolean = false;

  @Input() title: string = "GEEN TITEL";
  @Input() hasBackButton: boolean = true;
  @Input() hasSearchButton: boolean = true;
  @Input() hasAddButton: boolean = true;
  
  @Output() onAddPressed = new EventEmitter();
  @Output() onSearchKeyup = new EventEmitter<any>();

  backPressed(): void {
    this.location.back();
  }

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
