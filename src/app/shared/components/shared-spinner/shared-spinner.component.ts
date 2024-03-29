import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-spinner',
  templateUrl: './shared-spinner.component.html',
  styleUrls: ['./shared-spinner.component.scss']
})
export class SharedSpinnerComponent {
  @Input() visible: Boolean = true;
}
