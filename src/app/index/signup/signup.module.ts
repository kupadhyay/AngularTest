import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutes } from './signup.routes';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SignupRoutes),
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
