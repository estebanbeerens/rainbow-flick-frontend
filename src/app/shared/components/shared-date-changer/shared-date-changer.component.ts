import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shared-date-changer',
  templateUrl: './shared-date-changer.component.html',
  styleUrls: ['./shared-date-changer.component.scss']
})
export class SharedDateChangerComponent {

  date: Date = new Date();

  @Output() onPreviousPressed = new EventEmitter<Date>();
  @Output() onNextPressed = new EventEmitter<Date>();

  previous(): void {
    this.incrementDate(-1);
    this.onPreviousPressed.emit(this.date);
  }

  next(): void {
    this.incrementDate(1);
    this.onNextPressed.emit(this.date);
  }

  private incrementDate(delta: number): void {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate() + delta
    );
  }

}
