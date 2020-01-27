import { Component, OnInit } from '@angular/core';
import { ProjectConstants } from 'src/app/constants/pizza-list';
import { BuypizzaService} from '../../services/buypizza.service';
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})

export class PizzaListComponent implements OnInit {
  constructor(private buyPizzaService: BuypizzaService) { }
  pizzaData = ProjectConstants.PIZZA_LIST;
  ngOnInit() {
    // console.log('pizzaData===>', pizzaData);
  }

  // tslint:disable-next-line: ban-types
  buyPizza(data: Object) {
    console.log('==>', data);
    // call to service...service will broadcast data, and receiver will get data.
    this.buyPizzaService.addPizzaService(data);
  }
}
