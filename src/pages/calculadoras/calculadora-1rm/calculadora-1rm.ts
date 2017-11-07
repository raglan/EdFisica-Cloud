import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calculadora-1rm',
  templateUrl: 'calculadora-1rm.html',
})
export class Calculadora1RmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calculadora1RmPage');
  }

}
