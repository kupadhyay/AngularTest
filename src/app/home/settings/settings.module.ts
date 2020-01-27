import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsRoutes } from './settings.routes';
import { SettingsComponent } from './settings.component';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
