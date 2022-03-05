/* eslint-disable @typescript-eslint/quotes */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ModalDetailledComponentModule } from "../modal-detailled/modal-detailled.module";
import { CardMenuComponent } from "./card-menu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetailledComponentModule
  ],
  declarations: [CardMenuComponent],
  exports: [CardMenuComponent]
})

export class CardMenuComponentModule {}
