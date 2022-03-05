/* eslint-disable @typescript-eslint/quotes */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ModalDetailledComponent } from "./modal-detailled.component";

@NgModule({
  imports:[ CommonModule, FormsModule, IonicModule],
  declarations: [ModalDetailledComponent],
  exports: [ModalDetailledComponent]
})

export class ModalDetailledComponentModule {}
