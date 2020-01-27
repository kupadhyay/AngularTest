import { Component, OnInit } from '@angular/core';
import { BuypizzaService } from '../../services/buypizza.service';
@Component({
  selector: 'app-cart-value',
  templateUrl: './cart-value.component.html',
  styleUrls: ['./cart-value.component.scss']
})
export class CartValueComponent implements OnInit {
  testNumber;
  constructor(private buyPizzaService: BuypizzaService) { }

  ngOnInit() {
    this.buyPizzaService.currentToatlaBill.subscribe(data => {
      console.log('total price subscribe method', data);
      this.testNumber = data;
   });
  }

}
