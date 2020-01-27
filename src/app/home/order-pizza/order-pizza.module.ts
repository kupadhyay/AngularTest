import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderPizzaRoutes } from './order-pizza.routes';
import { OrderPizzaComponent } from './order-pizza.component';
import { PizzaListComponent} from '../../components/pizza-list/pizza-list.component';
import { SummaryBarComponent } from '../../components/summary-bar/summary-bar.component';
import { CartValueComponent} from '../../components/cart-value/cart-value.component';
import { PlusMinusComponent } from '../../components/plus-minus/plus-minus.component';
import { SharedModuleModule } from '../../SharedModule/shared-module/shared-module.module';
import { StopPropgationDirective } from '../../directive/stop-propgation.directive';

@NgModule({
  declarations: [OrderPizzaComponent,
                 PizzaListComponent ,
                 SummaryBarComponent ,
                 CartValueComponent ,
                 PlusMinusComponent ,
                 StopPropgationDirective ],
  imports: [
    CommonModule,
    SharedModuleModule,
    FormsModule,
    RouterModule.forChild(OrderPizzaRoutes),
  ],
  exports: [OrderPizzaComponent]
})
export class OrderPizzaModule { }
