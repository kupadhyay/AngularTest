import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routes';
import { ProductsComponent } from './products.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsFormDialogComponent } from './products-form-dialog/products-form-dialog.component';
import { MaterialModule } from 'src/app/app.module';
// import { ProductsDialogComponent } from './products-dialog/products-dialog.component';



@NgModule({
  declarations: [ProductsComponent, ProductsDialogComponent, ProductsFormDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProductsRoutes),
  ],
  entryComponents: [ProductsDialogComponent, ProductsFormDialogComponent],
  exports: [ProductsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
