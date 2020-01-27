import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharacter } from '../pipe/first-character';


@NgModule({
  declarations: [
    FirstCharacter
  ],
  exports: [
    FirstCharacter
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
