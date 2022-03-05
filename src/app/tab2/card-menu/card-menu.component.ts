/* eslint-disable prefer-const */
import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../_models/menu';
import { MealsService } from '../../_services/meals.service';
import { MenuServiceService } from '../../_services/menu-service.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent implements OnInit {

  @Input() menuId;

  menu: Menu;
  meals=[];
  mealId;
  show=false;
  constructor(private menuService: MenuServiceService, private mealService: MealsService) { }

  ngOnInit() {
    this.menuService.getMenuById(this.menuId).subscribe(data=>{
      this.menu=data;
      for(let meal of this.menu.meals){
        this.mealService.getMealImg(meal.id).subscribe(result=>{
          this.meals.push({
            id:meal.id,
            label:meal.label,
            img:result.image64
          });
        });
      }
    });
  }

  setMealId(id: number){
    this.mealId=id;
    this.show=!this.show;
  }
}
