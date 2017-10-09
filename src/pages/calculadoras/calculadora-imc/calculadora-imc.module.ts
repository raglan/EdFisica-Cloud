import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculadoraImcPage } from './calculadora-imc';

@NgModule({
  declarations: [
    CalculadoraImcPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculadoraImcPage),
  ],
})
export class CalculadoraImcPageModule {}
