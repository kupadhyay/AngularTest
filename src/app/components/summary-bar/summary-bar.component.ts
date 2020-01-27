import { Component, OnInit } from '@angular/core';
import { BuypizzaService } from '../../services/buypizza.service';


@Component({
  selector: 'app-summary-bar',
  templateUrl: './summary-bar.component.html',
  styleUrls: ['./summary-bar.component.scss']
})
export class SummaryBarComponent implements OnInit {
  addObject: any = [];
  public orederRemovedParent: boolean;
  constructor(private buyPizzaService: BuypizzaService) { }

  ngOnInit() {
    console.log('summary bar init before subscribe...');
    // this.buyPizzaService.currentpizzaDetail.subscribe(data => this.addObject = data);
    this.buyPizzaService.currentpizzaDetail.subscribe(data => {
       console.log('subscribe method', data);
       this.addObject = data;
     // console.log('addedData=', this.addObject);
    });
// console.log('addedData=', this.addObject);
  }

  public onOrderRemoved(status: boolean) {
    this.orederRemovedParent = status;
  }

}
