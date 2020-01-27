import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.scss']
})
export class PlusMinusComponent implements OnInit {
  item: number;
  // isMinimum = true;
 // isZero = false;
  @Output() private orederremoved = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.item = 1;
  }
  plus(item: number, event: Event) {
    this.item++;
    this.checkMinimum(event);
  }
  minus(item: number, event: Event) {
    this.item--;
    this.checkMinimum(event);

  }
  checkMinimum(event: Event) {
    // Note: will extend, if this.item == 0 then remove that full li element.
    // if (this.item === 1) {
    //  this.isMinimum = true;
    // } else {
    //   this.isMinimum = false;
    // }
    // this eventEmiiter for to remove li elment from summry bar.
    if (this.item === 0) {
        // this.isZero = true;
        this.orederremoved.emit(true);
    } else {
       // this.isZero = false;
    }
  }

}
