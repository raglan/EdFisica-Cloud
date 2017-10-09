import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculadorasPage } from './calculadoras';

@NgModule({
  declarations: [
    CalculadorasPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculadorasPage),
  ],
})
export class CalculadorasPageModule {}
