import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-products-form-dialog',
  templateUrl: './products-form-dialog.component.html',
  styleUrls: ['./products-form-dialog.component.scss']
})
export class ProductsFormDialogComponent implements OnInit {

  public addCusForm: FormGroup;
  // tslint:disable-next-line: no-inferrable-types
  public fname: string = `Kishan`;
  // tslint:disable-next-line: no-inferrable-types
  public lname: string = `Upadhyay`;
  wasFormChanged = false;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.addCusForm = this.fb.group({
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      gender: ['1'],
      picker1: [],
    });
  }

  public onaddCus(form: NgForm): void {
    // save function
    console.log(' test 123=>', form);
    console.log('save button clicked...123', this.addCusForm.controls.firstname.value);
    this.markAsDirty(this.addCusForm);
    this.dialog.closeAll();
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }
  openDialog(): void {
    console.log(' close dialog... ');
    console.log(this.wasFormChanged);
    this.dialog.closeAll();
  }

  formChanged() {
    this.wasFormChanged = true;
  }
}
