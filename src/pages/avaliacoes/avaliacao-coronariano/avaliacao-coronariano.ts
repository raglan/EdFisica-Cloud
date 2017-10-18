import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-avaliacao-coronariano',
  templateUrl: 'avaliacao-coronariano.html',
})
export class AvaliacaoCoronarianoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoCoronarianoPage');
  }
}
