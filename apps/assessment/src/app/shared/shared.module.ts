import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatButtonModule, CommonModule, ReactiveFormsModule],
  exports: [MatButtonModule, CommonModule, ReactiveFormsModule]
})
export class SharedModule {}
