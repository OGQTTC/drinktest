import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getdrinkList():any{
    let result=null;
    let drinkList = localStorage.getItem('drinks');
    if(drinkList){
      result=JSON.parse(drinkList);
    }else{
      result=[];
    }
    return result;
  }

  saveDrink(drink:any):void{
    let drinks=localStorage.getItem('drinks');
    if(drinks){
      let drinkList=JSON.parse(drinks);
      drinkList.unshift(drink);
      localStorage.setItem('drinks', JSON.stringify(drinkList));
    }else{
      let drinkList=[];
      drinkList.unshift(drink);
      localStorage.setItem('drinks', JSON.stringify(drinkList));
    }
  }

  deleteDrink(drink:any):void{
    let drinks=localStorage.getItem('drinks');
    if(drinks){
      let drinkList=JSON.parse(drinks);
      drinkList.forEach((ele:any,i:number) => {
        if(ele.id==drink.id){
          drinkList.splice(i,1);
        }
      });
      localStorage.setItem('drinks', JSON.stringify(drinkList));
    }

  }

  updateDrink(drink:any):void{
    let drinks=localStorage.getItem('drinks');
    if(drinks){
      let drinkList=JSON.parse(drinks);
      drinkList.forEach((ele:any,i:number) => {
        if(ele.id==drink.id){
          drinkList[i].name=drink.name;
          drinkList[i].price=drink.price;
        }
      });
      localStorage.setItem('drinks', JSON.stringify(drinkList));
    }
  }
}
