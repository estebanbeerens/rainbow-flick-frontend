import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-paginator',
  templateUrl: './shared-paginator.component.html',
  styleUrls: ['./shared-paginator.component.scss'],
})
export class SharedPaginatorComponent {
  @Input() tableName: String = '[TABLE NAME]';
  @Input() minCount: number = 0;
  @Input() from: number = 0;
  @Input() to: number = 6;
  @Input() total: number = 0;
  @Input() splitEvery: number = 5;

  @Output() onPreviousPressed = new EventEmitter();
  @Output() onNextPressed = new EventEmitter();

  constructor() {
    this.from = this.minCount;
    this.to = this.splitEvery;
  }

  validateCount(toC, fromC) {
    return toC > this.minCount && toC < this.total && fromC >= this.minCount && fromC < this.total;
  }

  nextCount() {
    let fromC = this.from;
    let toC = this.to;

    fromC = toC + 1;
    toC = toC + this.splitEvery;
    if (this.validateCount(toC, fromC)) {
      this.from = fromC;
      this.to = toC;
    } else if (this.to < this.total) {
      this.from = this.to + 1;
      this.to = this.total + 1;
    }
  }

  previousCount() {
    let fromC = this.from;
    let toC = this.to;

    toC = fromC - 1;
    fromC = fromC - this.splitEvery - 1;
    if (this.validateCount(toC, fromC)) {
      this.from = fromC;
      this.to = toC;
    } else if (this.from <= this.splitEvery) {
      this.from = this.minCount;
      this.to = this.splitEvery;
    }
  }

  previous(): void {
    this.previousCount();
    this.onPreviousPressed.emit({ from: this.from, to: this.to });
  }

  next(): void {
    this.nextCount();
    this.onNextPressed.emit({ from: this.from, to: this.to });
  }
}
