/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Meals } from 'src/app/_models/meals';
import { Menu } from 'src/app/_models/menu';
import { MealsService } from 'src/app/_services/meals.service';
import { MenuServiceService } from 'src/app/_services/menu-service.service';

@Component({
  selector: 'app-modal-detailled',
  templateUrl: './modal-detailled.component.html',
  styleUrls: ['./modal-detailled.component.scss'],
})


export class ModalDetailledComponent implements OnInit {

  @Input() mealId;
  @Input() menuId;
  @Input() show;

  meal: Meals;
  meal2={
    id:0,
    label:"",
    img:"",
    ingredients:[],
    price:0
  };
  menu: Menu;
  cartItem=[];

  constructor(private mealService: MealsService,private menuService: MenuServiceService, private modalController: ModalController) { }

  ngOnInit() {
    this.mealService.getMeal(this.mealId).subscribe(m=>{
      this.meal=m;
      this.mealService.getMealImg(this.mealId).subscribe(img=>{
        this.meal2={
          id:this.meal.id,
          label:this.meal.label,
          img:img.image64,
          ingredients:this.meal.ingredients,
          price:this.meal.priceDF
        };
      });
    });

    this.menuService.getMenuById(this.menuId).subscribe(data=>this.menu=data);
  }

  dismiss(){
    this.modalController.dismiss({'dismissed':true});
  }
  addToCart(meal: Meals){
    console.log(meal);
    console.log(this.menu);
  }
}
