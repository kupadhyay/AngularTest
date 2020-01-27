import { Component, OnInit, ViewChild } from '@angular/core';
// import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort  } from '@angular/material';
// import { TestDialogComponent } from 'src/app/test-dialog/test-dialog.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsFormDialogComponent } from './products-form-dialog/products-form-dialog.component';
import { ProjectConstants } from '../../constants/tableDatat';

const ELEMENT_DATA = ProjectConstants.TABLE_DATA;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  isActive = false;
  animal: string;
  name = 'Kishan';
  // sequence depend on this order, not in html sequence.
  displayedColumns = ['position', 'name',  'symbol', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild (MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild (MatSort, {static: false}) sort: MatSort;
   constructor(public dialog: MatDialog) { }
  // constructor() { }
  ngOnInit() {
    console.log('inside product component...', this.isActive);
   // this.paginator.pageIndex = 0;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openPopup() {
    console.log(' open popup...');
    // tslint:disable-next-line: no-shadowed-variable
   // const element = document.getElementById('modalBox');
   // element.className = 'is-active';
  }

  closePopup() {
    console.log('popup');
    const element1 = document.getElementById('modalBox');
    element1.className = '';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductsDialogComponent, {
      width: '250px'
    });
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(ProductsFormDialogComponent, {
      width: '650px', // will take auto width
      data: {animal: this.animal}
    });
  }
}
