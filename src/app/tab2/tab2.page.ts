import { Component, OnInit } from '@angular/core';
import { Menu } from '../_models/menu';
import { Quantity } from '../_models/quantity';
import { MealsService } from '../_services/meals.service';
import { MenuServiceService } from '../_services/menu-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  slideOptions={
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8
  };


  weekNumber: number;
  menusOfTheWeeks: Menu[]=[];
  menusWeek: any[]=[];
  meals: any[]=[];
  menu2: any=null;
  meal: any=null;
  menuId: number;
  items: Quantity[]=[];

  constructor(private mealService: MealsService,private menuService: MenuServiceService) {}

  ngOnInit(): void {
    this.menuService.getMenusForToday().subscribe(result=>{

      this.menusOfTheWeeks=result;

      // eslint-disable-next-line prefer-const
      for(let menu of this.menusOfTheWeeks){

        if(menu.meals!=null){

          this.menusWeek.push({
            id:menu.id,
            description: menu.description,
            label:menu.label,
            meals:menu.meals
          });
        }
      }
    });
    // keep the cart
    if(localStorage.getItem('cartItems')!==null){
      this.items=JSON.parse(localStorage.getItem('cartItems') || '[]');
      console.log(this.items);
    }
  }

}
