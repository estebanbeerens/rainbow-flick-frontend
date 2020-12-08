import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule
  ]
})
export class SharedModule { }
