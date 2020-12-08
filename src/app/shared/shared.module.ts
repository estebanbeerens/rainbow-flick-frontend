import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule, NgScrollbarModule, MatDialogModule],
})
export class SharedModule {}
