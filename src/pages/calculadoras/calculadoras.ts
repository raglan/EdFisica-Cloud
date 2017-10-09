import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculadoraFcmPage } from "./calculadora-fcm/calculadora-fcm";

// import { CalcularoraFCMPage } from "../pages/calculadoras/calculadoras/calculadora-fcm";

@Component({
  selector: 'page-calculadoras',
  templateUrl: 'calculadoras.html',
})
export class CalculadorasPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string, page:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    
    this.items = [{title:'FCM', icon:'calculator',page:CalculadoraFcmPage}, 
                  {title:'IMC', icon:'calculator',page:'' },
                  {title:'RCQ', icon:'calculator',page:''},
                  {title:'1RM', icon:'calculator',page:''},
                  {title:'7-DOBRAS', icon:'calculator',page:''}];
  }

  calculadora(item){
    this.navCtrl.push(item.page)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadorasPage');
  }

}
