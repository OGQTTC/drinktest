import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { DrinkComponent } from 'src/app/components/drink/drink.component';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource = [
    {
      id: 1,
      name: 'Lemonade Shrub',
      price: '100'
    },
  ];
  displayedColumns = [
    'no',
    'name',
    'price',
    'action',
  ];
  constructor(
    private dialog: MatDialog,
    private sharedService:SharedService
  ) { }

  ngOnInit(): void {
    this.dataSource=this.sharedService.getdrinkList();
  }

  addDrink() {
    const dialogRef = this.dialog.open(DrinkComponent, {
      width: '450px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'custom-mat-dialog',
      data:{
        update:false,
        drink:null
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataSource=this.sharedService.getdrinkList();
      }
    });
  }

  editDrink(drink:any) {
    const dialogRef = this.dialog.open(DrinkComponent, {
      width: '450px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'custom-mat-dialog',
      data:{
        update:true,
        drink:drink
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataSource=this.sharedService.getdrinkList();
      }
    });
  }

  deleteDrink(drink:any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'custom-mat-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.sharedService.deleteDrink(drink);
        this.dataSource=this.sharedService.getdrinkList();
      }
    });

  }

}
