import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rf-core-toolbar-presenter',
  templateUrl: './core-toolbar-presenter.component.html',
  styleUrls: ['./core-toolbar-presenter.component.scss']
})
export class CoreToolbarPresenterComponent {

  @Input() sideNavToggled: boolean;

  @Output() onToggle = new EventEmitter();
  @Output() onLogout = new EventEmitter();

  toggle(): void {
    this.onToggle.emit();
  }

}
