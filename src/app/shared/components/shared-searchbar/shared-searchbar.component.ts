import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-searchbar',
  templateUrl: './shared-searchbar.component.html',
  styleUrls: ['./shared-searchbar.component.scss']
})
export class SharedSearchbarComponent {

  @Output() onKeyUp = new EventEmitter<String>();

  keyUp(event: any): void {
    this.onKeyUp.emit(event.target.value);
    console.log("text in searchbar: ", event.target.value);
  }

}
