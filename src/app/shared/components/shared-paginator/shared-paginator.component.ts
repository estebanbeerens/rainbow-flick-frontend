import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-paginator',
  templateUrl: './shared-paginator.component.html',
  styleUrls: ['./shared-paginator.component.scss']
})
export class SharedPaginatorComponent {
  
  @Input() tableName: string = '[TABLE NAME]';
  @Input() from: number = 0;
  @Input() to: number = 0;
  @Input() total: number = 0;

  @Output() onPreviousPressed = new EventEmitter();
  @Output() onNextPressed = new EventEmitter();

  previous(): void {
    this.onPreviousPressed.emit();
  }

  next(): void {
    this.onNextPressed.emit();
  }

}
