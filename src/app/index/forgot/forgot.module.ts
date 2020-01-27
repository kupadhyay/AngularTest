import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForgotRoutes } from './forgot.routes';
import { ForgotComponent } from './forgot.component';



@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ForgotRoutes),
  ],
  exports: [ForgotComponent]
})
export class ForgotModule { }
