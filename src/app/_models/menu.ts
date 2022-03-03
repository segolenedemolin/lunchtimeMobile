import { Meals } from "./meals";

export class Menu {

  id: number;
  description: string;
  label: string;
  status: number;
  imageId: number;
  priceDF:number;
  availableForWeeks: number[];
  meals : Meals[]


  constructor(description: string, label: string, status: number, imageId:number, priceDf: number,availableForWeeks: number[], meals: Meals[], id: number=0){
    this.description=description;
    this.label=label;
    this.status=status;
    this.imageId=imageId;
    this.priceDF=priceDf;
    this.availableForWeeks=availableForWeeks;
    this.meals=meals;
    this.id=id;
  }


}
