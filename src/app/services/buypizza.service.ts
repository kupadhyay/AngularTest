import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuypizzaService {

  private pizzaDetail = new Subject();
  currentpizzaDetail = this.pizzaDetail.asObservable();
  // tslint:disable-next-line: ban-types
  private totalBill = new Subject();
  currentToatlaBill = this.totalBill.asObservable();

  private order = [];
  // tslint:disable-next-line: ban-types
  private finalBill = 0;
  constructor() { }

  // tslint:disable-next-line: ban-types
  addPizzaService(data) {
    console.log('inside buy pizza service....1', data);
    this.order.push(data);
    console.log('inside buy pizza service....1', this.order);
    this.pizzaDetail.next(this.order);

    // tslint:disable-next-line: no-string-literal
    this.finalBill = this.finalBill + data.price;
    this.totalBill.next(this.finalBill);
    console.log('finalBill === ', this.finalBill);
  }
}
