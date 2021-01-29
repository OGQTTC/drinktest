import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  formGroup!: FormGroup;
  update=false;
  drink:any;
  constructor(
    public dialogRef: MatDialogRef<DrinkComponent>,
    private formBuilder:FormBuilder,
    private sharedService:SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
    this.update= this.data.update;
    this.drink=this.data.drink;
    if(this.drink !==null){
      this.formGroup.patchValue({
        name:this.drink.name,
        price:this.drink.price
      })
    }
  }

  addDrink(){
    let drink=this.formGroup.value;
    drink.id=this.createId();
    this.sharedService.saveDrink(drink);
    this.dialogRef.close(true);
  }

  updateDrink(){
    let drink=this.formGroup.value;
    drink.id=this.drink.id;
    this.sharedService.updateDrink(drink);
    this.dialogRef.close(true);
  }

  createId(){
    return Math.random().toString(36).substr(2, 10);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
