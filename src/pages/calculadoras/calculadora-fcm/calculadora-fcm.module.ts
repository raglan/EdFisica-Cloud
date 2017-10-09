import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculadoraFcmPage } from './calculadora-fcm';

@NgModule({
  declarations: [
    CalculadoraFcmPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculadoraFcmPage),
  ],
})
export class CalculadoraFcmPageModule {}
