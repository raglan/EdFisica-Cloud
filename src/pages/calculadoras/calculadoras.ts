import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CalculadoraFcmPage } from "./calculadora-fcm/calculadora-fcm";
import { CalculadoraImcPage } from "./calculadora-imc/calculadora-imc";
import { CalculadoraRcqPage } from "./calculadora-rcq/calculadora-rcq";
import { Calculadora1RmPage } from "./calculadora-1rm/calculadora-1rm";
import { Calculadora7DobrasPage } from "./calculadora-7dobras/calculadora-7dobras";

@Component({
  selector: 'page-calculadoras',
  templateUrl: 'calculadoras.html',
})
export class CalculadorasPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string, page:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [{title:'FCM', icon:'calculator',page: CalculadoraFcmPage}, 
                  {title:'IMC', icon:'calculator',page: CalculadoraImcPage },
                  {title:'RCQ', icon:'calculator',page: CalculadoraRcqPage},
                  {title:'1RM', icon:'calculator',page: Calculadora1RmPage},
                  {title:'7-DOBRAS', icon:'calculator',page: Calculadora7DobrasPage}];
  }

  calculadora(item){
    this.navCtrl.push(item.page)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadorasPage');
  }

}
