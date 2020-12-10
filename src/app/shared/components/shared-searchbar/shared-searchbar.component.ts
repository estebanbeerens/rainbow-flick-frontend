import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-searchbar',
  templateUrl: './shared-searchbar.component.html',
  styleUrls: ['./shared-searchbar.component.scss']
})
export class SharedSearchbarComponent {

  @Output() onSearchKeyup = new EventEmitter<any>();

  keyUp(searchString: string): void {
    this.onSearchKeyup.emit(searchString);
  }

}
