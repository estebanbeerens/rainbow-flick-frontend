import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-searchbar',
  templateUrl: './shared-searchbar.component.html',
  styleUrls: ['./shared-searchbar.component.scss']
})
export class SharedSearchbarComponent {

  @Output() onKeyUp = new EventEmitter<any>();

  keyUp(event: any): void {
    // this.onKeyUp.emit(event);
    console.log(event);
  }

}
