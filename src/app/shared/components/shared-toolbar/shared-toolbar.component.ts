import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-toolbar',
  templateUrl: './shared-toolbar.component.html',
  styleUrls: ['./shared-toolbar.component.scss']
})
export class SharedToolbarComponent {

  @Input() title: string = "GEEN TITEL";
  @Input() hasBackButton: boolean = true;
  @Input() hasAddButton: boolean = true;
  
  @Output() onAddPressed = new EventEmitter();

  addPressed(): void {
    this.onAddPressed.emit();
  }

}
