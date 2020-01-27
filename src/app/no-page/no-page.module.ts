import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './no-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NoPageComponent],
  imports: [
    CommonModule,
RouterModule
  ],
  exports: [NoPageComponent]
})
export class NoPageModule { }
